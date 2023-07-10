import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Banner from "../components/Banner";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import axios from "axios";
import { useAuth } from "../context/authContext";
import Cookies from "js-cookie";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DefaultLayout() {
    const location = useLocation();
    const { updateDataUser } = useAuth();

    const setHeaderToken = () => {
        const token = Cookies.get("token");

        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    };

    const getUserData = async () => {
        try {
            const response = await axios.get("/api/account/session");

            updateDataUser({ user: response.data, isAuthenticated: true });
        } catch (ex: any) { /* empty */ }
    };

    useEffect(() => {
        setHeaderToken();
        getUserData();
    }, []);

    return (
        <>
            <Navigation />
            <ToastContainer />
            <main className="flex-grow-1">
                {location.pathname === "/" && <Banner />}
                <div className="container my-5">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </>
    );
}
