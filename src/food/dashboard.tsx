import classes from "./dashboard.module.scss";
import * as Separator from "@radix-ui/react-separator";
import FLAME from "./svg/flame.svg";

// import { useEffect } from "react";
import { foodArr } from "../dummyData";
import { ClockIcon } from "@radix-ui/react-icons";
import { useScreenWidth } from "../app/AppContext";

export const Dashboard = () => {
  return (
    <>
      <div>
        <h1>Delicious Food</h1>
        <h4>We made fresh and Healthy food</h4>
      </div>

      <div></div>

      <div className={classes.card_wrapper}>
        {foodArr.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            img={item.image}
            time={item.cookingTime}
            calories={item.calories}
            description={item.description}
            score={item.dinerScore}
          />
        ))}
      </div>
    </>
  );
};

interface CardProps {
  title: string;
  img: string;
  time: number;
  calories: number;
  description: string;
  score: number;
}

const Card = ({
  title,
  img,
  time,
  calories,
  description,
  score,
  ...props
}: CardProps) => {
  const screenWidth = useScreenWidth();

  const wordCounter = (word: string) => {
    let newWord;
    const maximum = screenWidth <= 330 ? 60 : screenWidth <= 390 ? 74 : 200;

    if (word.length > maximum) {
      newWord = word.slice(0, maximum);
      newWord += "...";
    } else newWord = word;

    return newWord;
  };

  return (
    <div {...props} className={classes.card_container}>
      <div className={classes.img_content}>
        <img src={img} alt={title} />
      </div>

      <div className={classes.card_content}>
        <h3>{title}</h3>
        <Separator.Root className={classes.separator} />
        <div className={classes.svg_content}>
          <div>
            <ClockIcon /> <span>{time} min</span>
          </div>
          <div>
            <img src={FLAME} alt="Calories" /> <span>{calories} cals</span>
          </div>
        </div>

        <p className={classes.description}>{wordCounter(description)}</p>

        <div className={classes.score}>
          <span>{score}</span>
        </div>
      </div>
    </div>
  );
};
