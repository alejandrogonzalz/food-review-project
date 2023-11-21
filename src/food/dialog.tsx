import * as Dialog from "@radix-ui/react-dialog";
import * as Separator from "@radix-ui/react-separator";
import classes from "./dialog.module.scss";

import FLAME from "./svg/flame.svg";
import { ClockIcon } from "@radix-ui/react-icons";

type DialogProps = {
  title: string | null;
  image: string;
  time: number | null;
  calories: number | null;
  description: string | null;
  dinerScore: number | null;
} & Dialog.DialogProps;

export const MyDialog = ({
  title,
  image,
  time,
  calories,
  description,
  dinerScore,
  open,
  onOpenChange,
}: DialogProps) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className={classes.overlay} />
        <Dialog.Content className={classes.content}>
          <div className={classes.card_container}>
            <div className={classes.img_content}>
              <img src={image} alt="" />
            </div>

            <div className={classes.card_content}>
              <h3>{title}</h3>
              <Separator.Root className={classes.separator} />
              <div className={classes.svg_content}>
                <div>
                  <ClockIcon /> <span>{time} min</span>
                </div>
                <div>
                  <img src={FLAME} alt="Calories" />{" "}
                  <span>{calories} cals</span>
                </div>
              </div>

              <p className={classes.description}>{description}</p>

              <div className={classes.score}>
                <span>{dinerScore}</span>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
