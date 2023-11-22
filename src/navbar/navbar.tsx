import classes from "./navbar.module.scss";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { BarChartIcon, HomeIcon } from "@radix-ui/react-icons";
import * as Separator from "@radix-ui/react-separator";
import {clsx} from "clsx";

import {useEffect, useState} from 'react'

export const Navbar = () => {
  const navigate = useNavigate();
  const {pathname} = useLocation()
  const [selected, setSelected] = useState<string>()

  const eliminateFirstCharacter = (str: string): string =>{
    return str.substring(1)
  }

  useEffect(()=>{  
    setSelected(eliminateFirstCharacter(pathname))
  },[pathname])

  return (
    <>
      <nav className={classes.navbar}>
        <button onClick={() => navigate("/")} className={clsx({[classes.selected]:selected === ''})}>
          <div > 
            <HomeIcon /> 
          <span>Home</span>
          </div>
        </button>
        <button onClick={() => navigate("/analytics")} className={clsx({[classes.selected]: selected === 'analytics'})}>
           <div>
            <BarChartIcon />
            <span>Analytics</span>
            </div>
        </button>
        <Separator.Root decorative className={clsx(classes.selector, {[classes.analytics]: selected === 'analytics'})}/>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  );
};
