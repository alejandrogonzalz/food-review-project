import classes from "./mainGraphs.module.scss";
import * as Tabs from "@radix-ui/react-tabs";
import * as Separator from "@radix-ui/react-separator";
import { clsx } from "clsx";
import { useEffect, useState } from "react";

import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line
} from "recharts";

import { foodArr, mostCommonIngredients } from "../../dummyData.js";
import { useScreenWidth } from "../../app/AppContext.js";

export const MainGraphs = () => {
  const [active, setActive] = useState<string>("tab1");

  useEffect(() => {
    console.log(active);
  }, [active]);

  return (
    <Tabs.Root
      value={active}
      onValueChange={setActive}
      className={classes.section}
    >
      <Tabs.List className={classes.tab_list}>
        <Tabs.Trigger
          value="tab1"
          className={clsx(classes.tab_trigger, {
            [classes.active]: active === "tab1",
          })}
        >
          Diner Score
        </Tabs.Trigger>
        <Tabs.Trigger
          value="tab2"
          className={clsx(classes.tab_trigger, {
            [classes.active]: active === "tab2",
          })}
        >
          Cooking Time
        </Tabs.Trigger>
        <Tabs.Trigger
          value="tab3"
          className={clsx(classes.tab_trigger, {
            [classes.active]: active === "tab3",
          })}
        >
          Ingredients
        </Tabs.Trigger>

        <Separator.Root
          decorative
          className={clsx(classes.selector, {
            [classes.tab1]: active === "tab1",
            [classes.tab2]: active === "tab2",
            [classes.tab3]: active === "tab3",
          })}
        />
      </Tabs.List>
      <Tabs.Content
        value="tab1"
        className={classes.tab_content}
        style={{ padding: "15px 10px" }}
      >
        <div className={classes.chart_container}>
          <DinerScore />
        </div>
      </Tabs.Content>
      <Tabs.Content
        value="tab2"
        className={classes.tab_content}
        style={{ padding: "15px 10px" }}
      >
        <div className={classes.chart_container}>
          <CookingTime />
        </div>      
      </Tabs.Content>
      <Tabs.Content
        value="tab3"
        className={classes.tab_content}
        style={{ padding: "15px 10px" }}
      >
        <div className={classes.chart_container}>
          <MostCommonIngredients />
        </div> 
      </Tabs.Content>
    </Tabs.Root>
  );
};

const DinerScore = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={foodArr}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="title" />
        <YAxis domain={[0, 5]}/>
        <Tooltip />
        <Legend />
        <Bar
          dataKey="dinerScore"
          fill="#9b2c2c"
          activeBar={<Rectangle fill="#ecc94b" stroke="black" />}
        />
        
      </BarChart>
    </ResponsiveContainer>
  );
};

const CookingTime = () => {

  const screenWdith = useScreenWidth();
  const mobile = screenWdith <= 500;

  return (
    <ResponsiveContainer width="100%" height="100%">
   <LineChart data={foodArr}
    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey={mobile ? null : "title"} />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="cookingTime" stroke="#8884d8" />
    <Line type="monotone" dataKey="Number of ingredients" stroke="#82ca9d" />
  </LineChart>
  </ResponsiveContainer>
  )
}


const MostCommonIngredients = () =>{

  return (
    <ResponsiveContainer width="100%" height="100%">
    <BarChart
      data={mostCommonIngredients}
      className={classes.bar_chart}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="ingredient" />
      <YAxis domain={[0, 5]}/>
      <Tooltip  />
      <Legend />
      <Bar
        dataKey="recipes"
        fill="#22543d"
        activeBar={<Rectangle fill="#81e6d9" stroke="black" />}
      />
      
    </BarChart>
  </ResponsiveContainer>
  )
}