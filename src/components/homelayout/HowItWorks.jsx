import React from "react";

const HowItWorks = () => {
  return (
    <section className="flex flex-col items-center gap-8 my-20">
      <h2 className="text-3xl font-bold">How It Works</h2>
      <div className="flex justify-center">
        <ul className="steps">
          <li className="step step-neutral">
            <span className="step-icon">😕</span>
            <p>Step One</p>
            <p>Add your pets to the app.</p>
          </li>
          <li className="step step-neutral">
            <span className="step-icon">😃</span>
            <p>Step 2</p>
            <p>Select a service or services for each one of them.</p>
          </li>
          <li className="step">
            <span className="step-icon">😍</span>
            <p>Step 3</p>
            <p>Leave a comment like where the food is, etc.</p>
          </li>
          <li className="step">
            <span className="step-icon">😍</span>
            <p>Step 4</p>
            <p>Skilled pet sitters come and do everything as instructed.</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HowItWorks;
