import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../views/Home";
import Favorites from "../views/Favorites";
import Jokes from "../views/Jokes";
import Layout from "../views/Layout";
import Error404 from "../views/Error404";
import DrinkDetail from "../views/DrinkDetail";
import Categories from "../views/Categories";
import Category from "../views/Category";
import Search from "../views/Search";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "drink/:drinkId", Component: DrinkDetail },
      { path: "categories", Component: Categories },
      { path: "categories/:categoryName", Component: Category },
      { path: "favorites", Component: Favorites },
      { path: "search", Component: Search },
      { path: "jokes", Component: Jokes },
      { path: "*", Component: Error404 },
    ],
  },
]);

const Routers = () => <RouterProvider router={router} />;

export default Routers;
