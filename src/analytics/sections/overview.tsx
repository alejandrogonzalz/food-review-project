import classes from "./overview.module.scss";
import {
  maxCalories,
  minCalories,
  foodWithMaxCal,
  foodWithMinCal,
  avgCookingTime,
} from "../../dummyData";

import FLAME from "./assets/flame.svg";
import { ClockIcon } from "@radix-ui/react-icons";
import * as Separator from "@radix-ui/react-separator";

import { calories, totalRecipes } from "../../dummyData.js";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";
// import { useScreenWidth } from "../../app/AppContext.js";

export const RecipesOverview = () => {
  return (
    <section className={classes.section_1}>
      <h2 className={classes.title}>Recipes Overview</h2>

      <div className={classes.main_wrapper}>
        <div className={classes.container}>
          <h3 className={classes.subtitle}>Food w/Fewer Calories</h3>
          <div className={classes.sub_container}>
            <h4 className={classes.primary_value}>{foodWithMinCal}</h4>
            <div className={classes.secondary_value_container}>
              <img src={FLAME} alt="Calories" />
              <span>{minCalories} cals</span>
            </div>
          </div>
        </div>
        <Separator.Root className={classes.separator_horizontal} />
        <div className={classes.container}>
          <h3 className={classes.subtitle}>Food w/More Calories</h3>
          <div className={classes.sub_container}>
            <h4 className={classes.primary_value}>{foodWithMaxCal}</h4>
            <div className={classes.secondary_value_container}>
              <img src={FLAME} alt="Calories" />
              <span>{maxCalories} cals</span>
            </div>
          </div>
        </div>
        <Separator.Root className={classes.separator_horizontal} />
        <div className={classes.container}>
          <h3 className={classes.subtitle}>All Recipes Average Cooking Time</h3>
          <div className={classes.sub_container}>
            <div className={classes.primary_value_container}>
              <ClockIcon />
              <h4 className={classes.primary_value}>{avgCookingTime} min</h4>
            </div>
          </div>
        </div>

        <Separator.Root className={classes.separator_vertical} />
      </div>
    </section>
  );
};

const PIE_COLORS = ["#2a4365", "#3c366b", "#702459"];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      style={{ fontSize: "0.8rem" }}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export const CaloriesSummary = () => {
  return (
    <section className={classes.section_2}>
      <h2 className={classes.title}>Calories Summary</h2>
      <div className={classes.calories_content}>
        <div className={classes.text_container}>
          {calories.map((item, index) => (
            <div key={`${item.name}-${index}`} className={classes.text_item}>
              <span className={classes.label}>{item.name} calories</span>
              <span className={classes.percentages}>
                {((item.value / totalRecipes) * 100).toFixed(2)} %
              </span>
            </div>
          ))}
        </div>

        <div className={classes.pie_chart_wrapper}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={calories}
                dataKey="value"
                cx="50%"
                cy="50%"
                fill="#8884d8"
                label={renderCustomizedLabel}
                labelLine={false}
              >
                {calories.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={PIE_COLORS[index % PIE_COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};
