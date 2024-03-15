import { createBrowserRouter } from "react-router-dom";
import PageNotFound from "../404";

import LandingPage from "./Public/LandingPage";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import ForgotPassword from "./Auth/ForgotPassword";
import Dashboard from "./Application/Dashboard/Dashboard";
import MyTasks from "./Application/MyTasks";
import Inbox from "./Application/Inbox";

const router = createBrowserRouter([
  // Public Pages
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <PageNotFound />,
  },
  // Authentication Pages
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  // Application Pages
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/my-tasks",
    element: <MyTasks />,
  },
  {
    path: "/inbox",
    element: <Inbox />,
  },
]);

export default router;
