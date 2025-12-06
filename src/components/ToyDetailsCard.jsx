import React from "react";
import { CiUser } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { FcRating } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";

const ToyDetailsCard = ({ key, toyDetails }) => {
  const {
    _id,
    name,
    location,
    imageUrl,
    description,
    price,
    category,
  } = toyDetails;
  const notify = () => toast("Check your email for further instrucitons");
  const notify1 = () => toast("Item bought Successfully!");
  const handleBuyNow = () => {
    notify1();
  }
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="hero bg-transparent ">
        <div className="hero-content flex-col lg:flex-row items-start">
          <img src={imageUrl} className="max-w-1/2 shadow-2xl" />
          <div className="flex flex-col gap-y-4">
            <h1 className="">#{_id}</h1>
            <h1 className="text-4xl">{name}</h1>
            <p className="font-bold text-secondary text-2xl">&#2547;{price}</p>
            <hr className="" />
            <p className="text-gray-500">{description}</p>
            <p className="">
              <span className="font-bold">Category: </span>
              {category}
            </p>
            <div
              onClick={handleBuyNow}
              to={`/toy-details/${_id}`}
              className="btn btn-block bg-secondary hover:bg-black hover:text-white"
            >
              Buy Now
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
      <div className="join">
        <div>
          <label className="input validator join-item">
            <CiUser />
            <input type="text" placeholder="Your Full Name" required />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>
        </div>
        <div>
          <label className="input validator join-item">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input type="email" placeholder="mail@site.com" required />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>
        </div>
        <button onClick={notify} className="btn bg-transparent hover:bg-secondary join-item">
          Try Now
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ToyDetailsCard;
