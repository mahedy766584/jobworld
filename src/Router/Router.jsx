import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Error/ErrorPage";
import Home from "../Pages/Home/Home";
import AddJob from "../Pages/AddJob/AddJob";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import MyBids from "../Pages/MyBids/MyBids";
import BidRequest from "../Pages/BidRequest/BidRequest";
import Register from "../Authentication/Register/Register";
import Login from "../Authentication/Login/Login";
import PrivateRoute from "../Authentication/Private/PrivateRoute";
import PracticeDropdown from "../Pages/AddJob/PracticeDropdown";
import WebDetails from "../Pages/Home/CardDetailsPages/WebDetails";
// import Animation from "../Components/ReactAnimation/Animation";
import BidNowForm from "../Components/BidNowForm/BidNowForm";
import MyPostedDetails from "../Components/MyPostedDetails/MyPostedDetails";
import UpdateForm from "../Pages/MyPostedJobs/UpdateForm";
import SeeDetailsFMPC from "../Pages/MyPostedJobs/SeeDetailsFMPC";

const myCreatedRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/addJob",
                element: <PrivateRoute>
                    <AddJob />
                </PrivateRoute>
            },
            {
                path: "/myPostedJobs",
                element: <PrivateRoute><MyPostedJobs /></PrivateRoute>
            },
            {
                path: "/myBids",
                element: <PrivateRoute><MyBids /></PrivateRoute>
            },
            {
                path: "/bidsRequests",
                element: <PrivateRoute><BidRequest /></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signUp",
                element: <Register />
            },
            {
                path: "/practiceDropdown",
                element: <PracticeDropdown />
            },
            {
                path: "/webDetails/:id",
                element: <PrivateRoute><WebDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5001/addJob/${params.id}`)
            },
            {
                path: "/bidNowForm/:id",
                element: <PrivateRoute><BidNowForm /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5001/addJob/${params.id}`)
            },
            {
                path: "/myPostedDetails/:id",
                element: <PrivateRoute><MyPostedDetails/></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5001/addJob/${params.id}`)
            },
            {
                path: "/updateForm/:id",
                element: <PrivateRoute><UpdateForm/></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5001/addJob/${params.id}`)
            },
            {
                path: "/seeDetails/:id",
                element: <PrivateRoute><SeeDetailsFMPC/></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5001/addJob/${params.id}`)
            }
        ]
    }
])

export default myCreatedRouter;