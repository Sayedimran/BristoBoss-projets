import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Navber from "../pages/Navber";

const Main = () => {
  const location = useLocation();
  console.log(location);

  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signUp");
  return (
    <div>
      {noHeaderFooter || <Navber />}
      <main className="min-h-[calc(100vh-306px)]">
        <Outlet />
      </main>
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default Main;
