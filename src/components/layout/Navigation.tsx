import { NavLink } from "react-router-dom";
import "bootstrap/js/src/collapse.js";

export default function Navigation() {
  const navigation = [
    {
      id: 1,
      name: "Home",
      url: "/",
    },
    {
      id: 2,
      name: "Szukaj samochodu",
      url: "/search-car",
    },
    {
      id: 3,
      name: "API",
      url: "http://localhost:57678/swagger/index.html",
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
          <div
            className="collapse navbar-collapse"
            id="navbarToggleExternalContent"
          >
            <NavLink className="navbar-brand d-none d-md-inline-block" to="/">
              Exclusive Cars W&W
            </NavLink>
            <div className="d-flex flex-column flex-md-row gap-1 ms-auto mt-3 mt-md-0">
              <ul className="navbar-nav nav-pills gap-1">
                {navigation.map((item) => (
                  <li className="nav-item" key={item.id}>
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to={item.url}
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <ul className="navbar-nav nav-pills gap-1">
                {loginNavigation.map((item) => (
                  <li className="nav-item" key={item.id}>
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to={item.url}
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
