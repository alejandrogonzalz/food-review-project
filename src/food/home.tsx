import classes from "./home.module.scss";
import * as Separator from "@radix-ui/react-separator";
import FLAME from "./svg/flame.svg";
import LOGO from './svg/hamburguer.svg'

import { useState, MouseEvent } from "react";
import { foodArr } from "../dummyData.js";
import { ClockIcon } from "@radix-ui/react-icons";
import { useScreenWidth } from "../app/AppContext";
import { MyDialog } from "./dialog";

interface CommonFoodProperties {
  title: string;
  image: string;
  calories: number;
}

interface FoodState extends CommonFoodProperties {
  cookingTime: number;
  description: string;
  dinerScore: number;
  ingredients: string[];
}

interface CardProps extends CommonFoodProperties {
  title: string;
  time: number;
  description: string;
  dinerScore: number;
  id: string;
  onOpenDialog: (event: MouseEvent<HTMLDivElement>) => void;
}

export const Home = () => {
  const initialState = {
    title: "",
    image: "",
    cookingTime: 0,
    calories: 0,
    description: "",
    dinerScore: 0,
    ingredients: [],
  };
  const [state, setState] = useState<FoodState>(initialState);
  const [open, setOpen] = useState<boolean>(false);

  const selectDialog = (id: number) => {
    const obj = foodArr[id];
    const nextState: FoodState = { ...initialState };
    for (const key in obj) {
      if (Object.hasOwn(obj, key)) {
        const value = obj[key];
        nextState[key] = value;
      }
    }
    setState(nextState);
    setOpen(true);
  };

  return (
    <div className={classes.home_container}>
      <div className={classes.main_container}>
        <div className={classes.main_title}><h1>Delicious Food</h1> <img src={LOGO} alt="Logo" /></div>
        <h4>We made fresh and Healthy food</h4>
      </div>


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
            onOpenDialog={() => selectDialog(index)}
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
        ingredients={state.ingredients}
        open={open}
        onOpenChange={setOpen}
      />
    </div>
  );
};

const Card = ({
  title,
  image,
  time,
  calories,
  description,
  dinerScore,
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
    <div className={classes.card_container} onClick={onOpenDialog}>
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
