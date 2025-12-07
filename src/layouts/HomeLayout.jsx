import React, { useEffect, useState } from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../components/Navbar";
import RightAside from "../components/homelayout/RightAside";
import Loading from "../pages/Loading";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Subscribe from "../components/Subscribe";
import RecentListings from "../pages/RecentListings";

const HomeLayout = () => {
  const { state } = useNavigation();

  return (
    <div>
      <header>
        {/* Navbar */}
        <nav className="w-11/12 mx-auto my-3">
          <Navbar></Navbar>
        </nav>
      </header>
      <main>
        <div>
          <Slider></Slider>
        </div>
        <div className="w-11/12 mx-auto my-3 border-2 border-red-400">
          <section className="main border-2 border-blue-400">
            {state == "loading" ? <Loading></Loading> : <RecentListings></RecentListings>}
          </section>
        </div>
        <div>
          <Subscribe></Subscribe>
        </div>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
