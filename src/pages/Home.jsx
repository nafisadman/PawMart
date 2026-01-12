import React from "react";
import Slider from "../components/Slider";
import HeroAdoptLoveBanner from "../components/homelayout/HeroAdoptLoveBanner/HeroAdoptLoveBanner";
import CategorySection from "../components/homelayout/CategorySection";
import HeroFigure from "../components/homelayout/HeroFigure";
import PricingCard from "../components/homelayout/PricingCard";
import CustomerReview from "../components/homelayout/CustomerReview";
import HowItWorks from "../components/homelayout/HowItWorks";
import WeeklyNewsletter from "../components/homelayout/WeeklyNewsletter";
import Discover from "../components/homelayout/Discover";
import WhyChoosePawMart from "../components/WhyChoosePawMart";

const Home = () => {
  return (
    <div>
      {/* Hero Banner */}
      <HeroAdoptLoveBanner />

      {/* Slider Section */}
      <Slider />

      {/* Main Content Container */}
      <div className="container mx-auto px-4">
        {/* Category Section */}
        <CategorySection />

        {/* Hero Figure */}
        <HeroFigure />

        {/* Why Choose PawMart */}
        <WhyChoosePawMart />
      </div>

      {/* Pricing Cards */}
      <PricingCard />

      {/* Customer Reviews */}
      <CustomerReview />

      {/* How It Works */}
      <HowItWorks />

      {/* Weekly Newsletter */}
      <WeeklyNewsletter />

      {/* Discover Section */}
      <Discover />
    </div>
  );
};

export default Home;
