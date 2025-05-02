import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Navber from "../pages/Navber";

const Main = () => {
  return (
    <div>
      <Navber />
      <main className="min-h-[calc(100vh-306px)]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Main;
