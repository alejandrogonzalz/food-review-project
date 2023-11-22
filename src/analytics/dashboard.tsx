// import {
//   BarChart,
//   Bar,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   LineChart,
//   Line,
//   PieChart,
//   Pie,
// } from "recharts";

// import { calories } from "../dummyData";
// import { useEffect } from "react";
import classes from "./dashboard.module.scss";
import { RecipesOverview, CaloriesSummary } from "./sections/overview";
import { MainGraphs } from "./sections/mainGraphs";

export const Dashboard = () => {
  // useEffect(() => {
  //   console.log(calories);
  // }, []);
  return (
    <div className={classes.main_grid}>
      <RecipesOverview />
      <CaloriesSummary />
      <MainGraphs />
    </div>
  );
};
