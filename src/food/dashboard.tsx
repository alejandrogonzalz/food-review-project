import foodArr from "../dummyData.json";
import classes from "./dashboard.module.scss";

export const Dashboard = () => {
  return (
    <>
      <div>
        <h1>Delicious Food</h1>
        <h4>We made fresh and Healthy food</h4>
      </div>

      <div></div>

      <div className={classes.food_wrapper}>
        {foodArr.map((food, index) => (
          <div key={index}>{food.title}</div>
        ))}
      </div>
    </>
  );
};
