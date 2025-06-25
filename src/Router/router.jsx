import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../pages/Home";
import Register from "../pages/Register";
import LogIn from "../pages/LogIn";
import JobDetails from "../pages/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply";
import MyApplications from "../pages/MyApplications";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            index:true,
            Component: Home
        },
        {
            path: '/register' ,
            Component : Register
        },
        {
            path: '/login' ,
            Component: LogIn
        },
        {
          path:'/jobs/:id' ,
          Component: JobDetails,
          loader: ({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
          path : '/jobApply/:id' ,
          element : <PrivateRoute>
            <JobApply></JobApply>
          </PrivateRoute>
        },
        {
          path:'/my-applications' ,
          // element: <PrivateRoute>
           element: <MyApplications></MyApplications>
          // </PrivateRoute>
        }
    ]
  },
]);