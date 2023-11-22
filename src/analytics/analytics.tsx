import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  LineChart,
  Line,
  PieChart,
  Pie,
} from "recharts";
import { foodArr } from "../dummyData";

import classes from "./analytics.module.scss";

import { useScreenWidth } from "../app/AppContext";
import { useEffect, useState } from "react";

export const Analytics = () => {
  const screenWidth = useScreenWidth();

  const [barChartWidth, setBarCharWidth] = useState<number>(screenWidth - 300);

  useEffect(() => {
    setBarCharWidth(screenWidth - 300);
  }, [screenWidth]);

  const obj = {};

  useEffect(() => {
    for (let i = 0; i < foodArr.length; i++) {
      console.log(foodArr[i].calories);
      if (Object.hasOwn(obj, foodArr[i].calories)) {
        obj[foodArr[i].calories] += 1;
      } else {
        obj[foodArr[i].calories] = 1;
      }
    }
    console.log(obj);
  }, []);

  return (
    <>
      <div>Hello here will be some graphs!</div>
      <BarChart
        width={300}
        height={250}
        data={foodArr}
        className={classes.barchart}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="title" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="dinerScore" fill="#8884d8" />
      </BarChart>

      <LineChart
        width={barChartWidth}
        height={250}
        data={foodArr}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="cookingTime" stroke="#82ca9d" />
      </LineChart>

      <PieChart width={400} height={400}>
        <Pie
          data={foodArr}
          dataKey="calories"
          cx="50%"
          cy="50%"
          outerRadius={60}
          fill="#8884d8"
        />
      </PieChart>
    </>
  );
};
