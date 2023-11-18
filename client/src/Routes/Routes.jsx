import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import StudentHome from "../Pages/Dashboard/Student/StudentHome/StudentHome";
import Payment from "../Pages/Dashboard/Student/Payment/Payment";
import MyEnrolled from "../Pages/Dashboard/Student/MyEnrolled/MyEnrolled";
import PaymentsHistory from "../Pages/Dashboard/Student/PaymentsHistory/PaymentsHistory";
import AddClass from "../Pages/Dashboard/Instructor/AddClass/AddClass";
import MyClasses from "../Pages/Dashboard/Instructor/MyClasses/MyClasses";
import ManageClasses from "../Pages/Dashboard/Admin/ManageClasses/ManageClasses";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers/ManageUsers";
import NotFound from "../Pages/NotFound/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/instructors",
                element: <Instructors />
            },
            {
                path: "/classes",
                element: <Classes />
            }
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [

            // students Route
            {
                path: "studentHome",
                element: <StudentHome />
            },
            {
                path: "payment/:id",
                element: <Payment />
            },
            {
                path: "enrolled",
                element: <MyEnrolled />
            },
            {
                path: "history",
                element: <PaymentsHistory />
            },

            // instructor route
            {
                path: "addClass",
                element: <AddClass />
            },
            {
                path: "myClasses",
                element: <MyClasses />
            },

            // admin route
            {
                path: "manageClasses",
                element: <ManageClasses />
            },
            {
                path: "manageUsers",
                element: <ManageUsers />
            }
        ]
    }
]);

export default router;