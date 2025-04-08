import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./componenets/Dashboard";
import Home from "./componenets/Home";
import About from "./componenets/About";
import Navbar from "./componenets/Navbar";
import ParamComp from "./componenets/ParamComp";
import MockTest from "./componenets/Mock-test";
import Courses from "./componenets/Courses";
import Reports from "./componenets/Reports";
import NotFound from "./componenets/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <Navbar />
        <Dashboard />
      </div>
    ),
    children: [
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "mocktest",
        element: <MockTest />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
    ],
  },
  {
    path: "/student/:id", // id is dynamic paramter
    element: (
      <div>
        <Navbar />
        <ParamComp />
      </div>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;
