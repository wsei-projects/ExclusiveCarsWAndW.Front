import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./layouts/default";
import Error from "./pages/error";
import Home from "./pages/index";
import Blog from "./pages/blog";
import Post from "./pages/post";
import PostForm from "./pages/post-form";
import Login from "./pages/login";
import Register from "./pages/register";
import axios from "axios";
import { AuthProvider } from "./context/authContext";

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
                path: "blog",
                element: <Blog />,
            },
            {
                path: "blog/:slug",
                element: <Post />,
            },
            {
                path: "post/add",
                element: <PostForm />,
            },
            {
                path: "post/:slug/edit",
                element: <PostForm />,
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
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
);
