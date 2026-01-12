import React, { useEffect, useState } from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../components/Navbar";
import Loading from "../pages/Loading";
import Footer from "../components/Footer";
import useTitle from "../hooks/useTitle";

const HomeLayout = () => {
  useTitle("Home");
  const { state } = useNavigation();

  return (
    <div>
      {/* Header */}
      <header>
        <nav className="w-11/12 mx-auto my-3">
          <Navbar />
        </nav>
      </header>

      {/* Main Content */}
      <main>
        {state === "loading" ? <Loading /> : <Outlet />}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomeLayout;