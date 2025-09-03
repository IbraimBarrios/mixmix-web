import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../views/Home";
import Favorites from "../views/Favorites";
import Jokes from "../views/Jokes";
import Layout from "../views/Layout";
import Error404 from "../views/Error404";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "favorites", Component: Favorites },
      { path: "jokes", Component: Jokes },
      { path: "*", Component: Error404 },
    ],
  },
]);

const Routers = () => <RouterProvider router={router} />;

export default Routers;
