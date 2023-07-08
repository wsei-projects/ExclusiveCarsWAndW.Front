import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./layouts/default";
import Error from "./pages/error";
import Home from "./pages/index";
import SearchCar from "./pages/search-car";
import Login from "./pages/login";
import Register from "./pages/register";
import axios from "axios";

import "./assets/scss/custom.scss";
import "./index.css";

axios.defaults.baseURL = `${import.meta.env.VITE_BACKEND_URL}`;

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "search-car",
                element: <SearchCar />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);