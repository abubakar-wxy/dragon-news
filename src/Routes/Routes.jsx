import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../pages/Loading";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path: "",
                element: <Home></Home>,
            },
            {
                path: "/category/:id",
                loader: () => fetch("/news.json"),
                element: <CategoryNews></CategoryNews>,
                hydrateFallbackElement: <Loading />,
            },
        ],
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>,
            },
            {
                path: "/auth/register",
                element: <Register></Register>,
            },
        ],
    },
    {
        path: "/news-details/:id",
        element: (
            <PrivateRoute>
                <NewsDetails />
            </PrivateRoute>
        ),
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <Loading />,
    },
    {
        path: "/*",
        element: <h2>Error404</h2>,
    },
]);
