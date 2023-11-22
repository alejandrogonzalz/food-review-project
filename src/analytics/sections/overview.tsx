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
// import { PieChart, Pie, ResponsiveContainer } from "recharts";

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

export const CaloriesSummary = () => {
  return (
    <section className={classes.section_2}>
      <h2 className={classes.title}>Calories Summary</h2>
      <div>
        <div>
          {calories.map((item, index) => (
            <div key={`${item.name}-${index}`}>
              <span>{item.name} calories</span>
              <span>{((item.value / totalRecipes) * 100).toFixed(2)} %</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

//   <ResponsiveContainer>
//     <PieChart>{/* <Pie /> */}</PieChart>
//   </ResponsiveContainer>;
