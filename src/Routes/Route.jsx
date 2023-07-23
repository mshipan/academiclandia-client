import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Colleges from "../Pages/Colleges";
import Admission from "../Pages/Admission";
import MyCollege from "../Pages/MyCollege";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MainLayout from "../Layouts/MainLayout";
import SearchResult from "../components/SearchResult";
import CollegeDetails from "../Pages/CollegeDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/colleges",
        element: <Colleges></Colleges>,
      },
      {
        path: "/college-details/:id",
        element: <CollegeDetails></CollegeDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/college/${params.id}`),
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
      {
        path: "/search-result",
        element: <SearchResult></SearchResult>,
      },
    ],
  },
]);

export default router;
