/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";

type AppContext = {
  screenWidth: number;
};

export const AppContext = createContext<AppContext | undefined>({
  screenWidth: window.innerWidth,
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    let timeoutId: number;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setScreenWidth(window.innerWidth);
      }, 50);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  const contextValue: AppContext = {
    screenWidth,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useScreenWidth = () => {
  const appContext = useContext(AppContext);
  return appContext?.screenWidth ?? window.innerWidth;
};
