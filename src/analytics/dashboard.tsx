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
import { useScreenWidth } from "../app/AppContext";

export const Dashboard = () => {
  // useEffect(() => {
  //   console.log(calories);
  // }, []);
  const screenWidth = useScreenWidth();
  return (
    <div className={classes.main_grid}>
      {screenWidth >= 1200 ? (
        <div className={classes.overview_container}>
          <RecipesOverview />
          <CaloriesSummary />
        </div>
      ) : (
        <>
          <RecipesOverview />
          <CaloriesSummary />
        </>
      )}
      <MainGraphs />
    </div>
  );
};
