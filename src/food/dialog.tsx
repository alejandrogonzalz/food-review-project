import * as Dialog from "@radix-ui/react-dialog";
import * as Separator from "@radix-ui/react-separator";
import classes from "./dialog.module.scss";
import { clsx } from "clsx";

import { useState, useEffect, ReactNode } from "react";
import FLAME from "./svg/flame.svg";
import {
  ClockIcon,
  Cross1Icon,
  ListBulletIcon,
  StarFilledIcon,
  StarIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";

type DialogProps = {
  title: string | null;
  image: string;
  time: number | null;
  calories: number | null;
  description: string | null;
  dinerScore: number | null;
  ingredients: string[] | null;
} & Dialog.DialogProps;

type StarIconType = ReactNode;

export const MyDialog = ({
  title,
  image,
  time,
  calories,
  description,
  dinerScore,
  ingredients,
  open,
  onOpenChange,
}: DialogProps) => {
  const [starIconArr, setStarIconArr] = useState<StarIconType[]>([]);

  useEffect(() => {
    const filledStars = Math.floor(dinerScore);
    const emptyStars = 5 - filledStars;
    const newStarIconArr = Array.from({ length: filledStars }, (_, index) => (
      <StarFilledIcon key={`filled-${index}`} />
    ));

    for (let i = 0; i < emptyStars; i++) {
      if (emptyStars > 0) {
        newStarIconArr.push(<StarIcon key={`empty-${filledStars + i}`} />);
      }
    }
    setStarIconArr(newStarIconArr);
  }, [dinerScore]);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className={classes.dialog_overlay} />
        <Dialog.Content className={classes.dialog_content}>
          <div className={classes.img_content}>
            <img src={image} alt={title} />
          </div>

          <div className={classes.card_content}>
            <div className={classes.title}>
              <h3>{title}</h3>
              <div className={classes.score}>
                {starIconArr}
                <span>{dinerScore}</span>
              </div>
            </div>
            <Separator.Root className={classes.separator} />
            <div className={classes.svg_content}>
              <div>
                <div className={classes.svg_container}>
                  <ClockIcon /> <span>{time}</span>
                </div>
                <span>min</span>
              </div>

              <Separator.Root className={classes.separator_vertical} />

              <div>
                <div className={classes.svg_container}>
                  <img src={FLAME} alt="Calories" /> <span>{calories}</span>
                </div>
                <span>cals</span>
              </div>

              <Separator.Root className={classes.separator_vertical} />

              <div>
                <div className={classes.svg_container}>
                  <ListBulletIcon /> <span>{ingredients.length}</span>{" "}
                </div>
                <span>ingredients</span>
              </div>
            </div>
            <Separator.Root className={classes.separator} />

            <p className={classes.description}>{description}</p>

            <ul
              className={clsx(classes.ingredients, {
                [classes.five_ingredients]: ingredients.length > 5,
              })}
            >
              {ingredients.map((item, index) => (
                <li key={index}>
                  <DoubleArrowRightIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button
              className={classes.close_button}
              onClick={() => onOpenChange(false)}
            >
              Cerrar
            </button>
          </div>

          <button
            className={classes.dialog_close_button}
            onClick={() => onOpenChange(false)}
          >
            <span>
              <Cross1Icon />
            </span>
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
