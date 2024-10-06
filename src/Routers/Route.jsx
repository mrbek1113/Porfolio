import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "../pages/Layout";
import AboutPage from "../pages/AboutPage";
import Projects from "../pages/Projects";

const route = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage/>,
      },
      {
        path: "/aboutPage",
        element: <AboutPage/>,
      },
      {
        path: "/projects",
        element: <Projects/>,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={route} />;
};
export default Router;
