import React from "react";
import { ToastContainer, toast } from "react-toastify";

const Subscribe = () => {
  const notify = () => toast("Subscribed Successfully!");

  const handleSubscribe = () => {
    notify();
  }
  
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Subscribe to our Newsletter!</h1>
          <p className="py-6">
            Subscribe to our newsletter to receive regular updates, industry insights, and important announcements tailored just for you.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <input type="email" className="input" placeholder="Enter your Email" />
              <button onClick={handleSubscribe} className="btn btn-neutral mt-4">Subscribe</button>
              <ToastContainer />
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
