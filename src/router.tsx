import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Navbar } from "./navbar/navbar";
import { Dashboard } from "./food/dashboard";
import { Analytics } from "./analytics/analytics";

export const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route index element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
