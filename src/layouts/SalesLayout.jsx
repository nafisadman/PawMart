import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";

const SalesLayout = () => {
  useEffect(() => {
    document.title = "ToyTopia | About";
  }, []);
  return (
    <div>
      {/* Navbar */}
      <header>
        <nav className="w-11/12 mx-auto my-3">
          <Navbar></Navbar>
        </nav>
      </header>
      {/* Body */}
      <main>
        {/* Banner - Now a 'Playtime Adventure' Banner */}
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              // Replace with a toy store or colorful background image URL
              "url(https://i.ibb.co.com/LsK1kR8/pexels-alexander-dummer-37646-1912868.jpg)", 
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">✨ Welcome to ToyTopia!! 🎉</h1>
              <p className="mb-5">
                Discover the <span className="font-bold">most amazing toys</span> for every adventurer, builder, and dreamer! 
                From cuddly creatures to awesome action figures, your next <span className="font-bold">playtime adventure</span> starts right here. Let the fun begin!
              </p>
            </div>
          </div>
        </div>
        {/* Timeline - Now a 'Milestones of Play' Section */}
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">New Arrivals</time>
              <div className="text-lg font-black">Super Stuffed Animals 🧸</div>
              Cuddle up with our <span className="font-bold">brand-new collection</span> of soft, squishy plushies! 
              Meet Fuzzy the Bear, Sparkle the Unicorn, and dozens of other snuggly 
              friends, perfect for bedtime stories and brave adventures.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end md:mb-10">
              <time className="font-mono italic">Best Sellers</time>
              <div className="text-lg font-black">Building Block Bonanza 🧱</div>
              Unleash your inner architect with the <span className="font-bold">most popular building sets!</span> 
              Create towering castles, speedy race cars, or a whole city—the only limit 
              is your imagination. Great for problem-solving fun!
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">Educational Fun</time>
              <div className="text-lg font-black">Science & Discovery Kits 🔬</div>
              Turn your living room into a <span className="font-bold">laboratory</span> These kits make learning about 
              chemistry, physics, and nature a blast. Grow crystals, build a robot, or 
              discover ancient fossils.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end md:mb-10">
              <time className="font-mono italic">Outdoor Play</time>
              <div className="text-lg font-black">Ride-On Roarers & Scooters 🛴</div>
              Get ready for some <span className="font-bold">outdoor thrills!</span> We have durable scooters, fun bikes, 
              and awesome ride-on toys to power your pavement adventures and soak up 
              the sunshine. Safety gear is available too!
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">Special Offer</time>
              <div className="text-lg font-black">Free Gift Wrapping! 🎁</div>
              Making gift-giving easy! Select <span className="font-bold">free, colorful gift wrapping</span> for any order over $50. Perfect for birthdays and holidays—let us 
              add the finishing touch!
            </div>
          </li>
        </ul>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default SalesLayout;