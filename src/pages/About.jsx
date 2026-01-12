import React from "react";

const About = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-primary">About Page</h2>
      <div className="flex flex-col justify-center items-center">
        <p className="w-96">
          Our brand started as a small family business in 2015. Since then we've grown a lot and now know for sure who you and your pup neec so both of you can
          enjoy exploring the world logether.
        </p>
        <img src="/public/CuteDoggie.gif" alt="" />
      </div>
    </div>
  );
};

export default About;
