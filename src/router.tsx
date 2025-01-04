import { createBrowserRouter } from "react-router";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";

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
        ]
    }
    
  ])