import classes from "./navbar.module.scss";
import { Outlet, useNavigate } from "react-router-dom";
import { BarChartIcon, HomeIcon } from "@radix-ui/react-icons";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={classes.body} />

      <nav className={classes.navbar}>
        <button onClick={() => navigate("/")}>
          <HomeIcon /> <span>Home</span>
        </button>
        <button onClick={() => navigate("/analytics")}>
          <BarChartIcon /> <span>Analytics</span>
        </button>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  );
};
