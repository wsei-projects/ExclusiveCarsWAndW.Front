import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import "bootstrap/js/src/collapse.js";

const navigation = [
    {
        id: 1,
        name: "Home",
        url: "/",
    },
    {
        id: 2,
        name: "Blog",
        url: "/blog",
    },
    {
        id: 3,
        name: "Dodaj posta",
        url: "/post/add",
    },
    {
        id: 4,
        name: "API",
        url: `${import.meta.env.VITE_BACKEND_URL}/swagger/index.html`,
        target: "_blank",
    },
];

const loginNavigation = [
    {
        id: 1,
        name: "Logowanie",
        url: "/login",
    },
    {
        id: 2,
        name: "Rejestracja",
        url: "/register",
    },
];

export default function Navigation() {
    const { state, logout } = useAuth();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        await logout();
        navigate("/login");
    };

    return (
        <header className="position-sticky top-0 bg-white z-1 bg-white border-bottom shadow-sm">
            <nav className="navbar navbar-expand-md navbar-light">
                <div className="container">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarToggleExternalContent"
                        aria-controls="navbarToggleExternalContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarToggleExternalContent">
                        <NavLink className="navbar-brand d-none d-md-inline-block" to="/">
                            Exclusive Cars W&W
                        </NavLink>
                        <div className="d-flex flex-column flex-md-row gap-1 ms-auto mt-3 mt-md-0">
                            <ul className="navbar-nav nav-pills gap-1">
                                {navigation.map((item) => (
                                    <li className="nav-item" key={item.id}>
                                        <NavLink className="nav-link" aria-current="page" to={item.url} target={item.target}>
                                            {item.name}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>

                            {state.isAuthenticated ? (
                                <ul className="navbar-nav nav-pills gap-1">
                                    <li className="nav-item">
                                        <div className="btn btn-light cursor-default">
                                            <span>{state.user?.Email}</span>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <button type="button" className="btn btn-primary" onClick={logoutHandler}>
                                            Wyloguj się
                                        </button>
                                    </li>
                                </ul>
                            ) : (
                                <ul className="navbar-nav nav-pills gap-1">
                                    {loginNavigation.map((item) => (
                                        <li className="nav-item" key={item.id}>
                                            <NavLink className="nav-link" aria-current="page" to={item.url}>
                                                {item.name}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
