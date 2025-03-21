import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './login';
import Browse from './browse';
import Register from './register';
const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        },
        {
            path:"/register",
            element:<Register/>
        }
    ])
    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body