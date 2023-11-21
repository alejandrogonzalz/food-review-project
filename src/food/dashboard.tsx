import classes from "./dashboard.module.scss";
import * as Separator from "@radix-ui/react-separator";
import FLAME from "./svg/flame.svg";

import { useState, MouseEvent } from "react";
import { foodArr } from "../dummyData";
import { ClockIcon } from "@radix-ui/react-icons";
import { useScreenWidth } from "../app/AppContext";
import { MyDialog } from "./dialog";

interface CommonFoodProperties {
  title: string | null;
  image: string;
  calories: number | null;
}

interface FoodState extends CommonFoodProperties {
  cookingTime: number | null;
  description: string | null;
  dinerScore: number | null;
  ingredients: string | null;
}

interface CardProps extends CommonFoodProperties {
  title: string;
  time: number;
  description: string;
  dinerScore: number;
  id: string;
  onOpenDialog: (event: MouseEvent<HTMLDivElement>) => void;
}

export const Dashboard = () => {
  const [state, setState] = useState<FoodState>({
    title: null,
    image: "",
    cookingTime: null,
    calories: null,
    description: null,
    dinerScore: null,
    ingredients: null,
  });

  const selectDialog =
    (id: number) => (e: React.MouseEvent<HTMLDivElement>) => {
      console.log(`Clicked on card with id ${id}`, e);
      const obj = foodArr[id];

      setState((prev) => {
        const nextState = { ...prev };

        for (const key in obj) {
          if (Object.hasOwn(obj, key)) {
            nextState[key as keyof foodArr] = obj[key as keyof foodArr];
          }
        }

        return nextState; // Return the updated state
      });
    };

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
            image={item.image}
            time={item.cookingTime}
            calories={item.calories}
            description={item.description}
            dinerScore={item.dinerScore}
            id={item.id.toString()}
            onOpenDialog={selectDialog(index)}
          />
        ))}
      </div>

      <MyDialog
        title={state.title}
        image={state.image}
        time={state.cookingTime}
        calories={state.calories}
        description={state.description}
        dinerScore={state.dinerScore}
      />
    </>
  );
};

const Card = ({
  title,
  image,
  time,
  calories,
  description,
  dinerScore,
  id,
  onOpenDialog,
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
    <div className={classes.card_container} id={id} onClick={onOpenDialog}>
      <div className={classes.img_content}>
        <img src={image} alt={title} />
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
          <span>{dinerScore}</span>
        </div>
      </div>
    </div>
  );
};
