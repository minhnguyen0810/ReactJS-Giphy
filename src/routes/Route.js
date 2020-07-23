import Home from "../home/Home";
import About from "../home/About";
import Blog from "../home/Blog";

export const routesHome = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/About",
    exact: false,
    component: About,
  },
  {
    path: "/Blog",
    exact: false,
    component: Blog,
  },
];
