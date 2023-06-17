import { Outlet, useLocation } from "react-router-dom";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import Banner from "../components/Banner";

export default function DefaultLayout() {
  const location = useLocation();

  return (
    <>
      <Navigation />
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
