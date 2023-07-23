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
import AdmissionBooking from "../Pages/AdmissionBooking";
import MyCollegeDetails from "../Pages/MyCollegeDetails";
import Profile from "../Pages/Profile";
import UpdateProfile from "../Pages/UpdateProfile";
import ErrorPage from "../Pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/colleges",
        element: (
          <PrivateRoute>
            <Colleges></Colleges>
          </PrivateRoute>
        ),
      },
      {
        path: "/college-details/:id",
        element: <CollegeDetails></CollegeDetails>,
        loader: ({ params }) =>
          fetch(
            `https://academiclandia-server.vercel.app/college/${params.id}`
          ),
      },
      {
        path: "/admission",
        element: (
          <PrivateRoute>
            <Admission></Admission>
          </PrivateRoute>
        ),
      },
      {
        path: "/admission-booking/:id",
        element: <AdmissionBooking></AdmissionBooking>,
        loader: ({ params }) =>
          fetch(
            `https://academiclandia-server.vercel.app/college/${params.id}`
          ),
      },
      {
        path: "/my-college",
        element: (
          <PrivateRoute>
            <MyCollege></MyCollege>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-college-details/:id",
        element: <MyCollegeDetails></MyCollegeDetails>,
        loader: ({ params }) =>
          fetch(
            `https://academiclandia-server.vercel.app/booking/${params.id}`
          ),
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
      {
        path: "/my-profile",
        element: <Profile></Profile>,
      },
      {
        path: "update-profile",
        element: <UpdateProfile></UpdateProfile>,
        loader: ({ params }) =>
          fetch(
            `https://academiclandia-server.vercel.app/user/${params.email}`
          ),
      },
    ],
  },
]);

export default router;
