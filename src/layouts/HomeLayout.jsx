import React, { useEffect, useState } from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../components/Navbar";
import Loading from "../pages/Loading";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import HeroFigure from "../components/homelayout/HeroFigure";
import CustomerReview from "../components/homelayout/CustomerReview";
import CategorySection from "../components/homelayout/CategorySection";
import useTitle from "../hooks/useTitle";
import HeroAdoptLoveBanner from "../components/homelayout/HeroAdoptLoveBanner/HeroAdoptLoveBanner";
import PricingCard from "../components/homelayout/PricingCard";
import HowItWorks from "../components/homelayout/HowItWorks";
import WeeklyNewsletter from "../components/homelayout/WeeklyNewsletter";
import Discover from "../components/homelayout/Discover";

const HomeLayout = () => {
  useTitle("Home");

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
          <HeroAdoptLoveBanner></HeroAdoptLoveBanner>
        </div>
        <div>
          <Slider></Slider>
        </div>

        <div className="w-11/12 mx-auto my-3">
          <CategorySection />
        </div>

        <div className="w-11/12 mx-auto my-3">
          <section className="main">
            {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>}
          </section>
        </div>
        <div>
          <HeroFigure></HeroFigure>
        </div>
        <PricingCard></PricingCard>
        <div>
          <CustomerReview></CustomerReview>
        </div>
        <HowItWorks></HowItWorks>
        <WeeklyNewsletter></WeeklyNewsletter>
        <Discover></Discover>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
