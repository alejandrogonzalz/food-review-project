import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Navbar } from "./navbar/navbar";
import { Home } from "./food/home";
import { Dashboard } from "./analytics/dashboard";

export const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/analytics" element={<Dashboard />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
