import { createBrowserRouter } from "react-router";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/", // This is the default route
                element: <Home />,
            },
            {
                path: "/about", // This is the default route
                element: <About />,
            },
        ],


    }
    , {
        path: "/",
        element: <AuthLayout />,
        children: [
            {
                path: "/login", // This is the default route
                element: <Login />,
            },
            {
                path: "/signup", // This is the default route
                element: <SignUp />,
            },
        ]
    }
])