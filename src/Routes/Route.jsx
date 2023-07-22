import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Colleges from "../Pages/Colleges";
import Admission from "../Pages/Admission";
import MyCollege from "../Pages/MyCollege";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/colleges",
    element: <Colleges></Colleges>,
  },
  {
    path: "/admission",
    element: <Admission></Admission>,
  },
  {
    path: "/my-college",
    element: <MyCollege></MyCollege>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default router;
