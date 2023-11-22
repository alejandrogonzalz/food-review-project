import classes from "./mainGraphs.module.scss";
import * as Tabs from "@radix-ui/react-tabs";
import * as Separator from "@radix-ui/react-separator";
import { clsx } from "clsx";
import { useEffect, useState } from "react";

export const MainGraphs = () => {
  const [active, setActive] = useState<string>("tab1");

  useEffect(() => {
    console.log(active);
  }, [active]);

  return (
    <section className={classes.section}>
      <Tabs.Root value={active} onValueChange={setActive}>
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
        <Tabs.Content value="tab1" className={classes.tab_content}>
          Tab 1
        </Tabs.Content>
        <Tabs.Content value="tab2" className={classes.tab_content}>
          Tab 2
        </Tabs.Content>
        <Tabs.Content value="tab3" className={classes.tab_content}>
          Tab 3
        </Tabs.Content>
      </Tabs.Root>
    </section>
  );
};
