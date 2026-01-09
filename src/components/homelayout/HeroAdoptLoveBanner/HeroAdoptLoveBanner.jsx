import React from "react";

const HeroAdoptLoveBanner = () => {
  return (
    <div className="border-4 mt-20 bg-secondary">
      <div className="text-9xl text-gray-800 flex flex-col items-center justify-between -space-y-14">
        <div className="flex flex-col justify-center items-center z-10 mt-20">
          <p className="font-fun">Adapt Love,</p>
          <p className="font-fun">foster happiness</p>
        </div>
        <img className="h-[600px]" src="/public/dog-img.png" alt="" />
      </div>
      <div className="w-fit absolute z-50 right-48 bottom-0 flex flex-col gap-4">
        <p className="text-primary">WHAT WE DO?</p>
        <p>
          With a focus on matching the right pet <br />
          with the right family, PetFoster makes <br />
          it easy to adopt love and foster <br />
          happiness.
        </p>
        <button className="btn btn-primary rounded-full w-fit">
          View Pets
        </button>
      </div>
      <div className="absolute z-50 left-48 bottom-0">
        <div className="avatar-group -space-x-6">
          <div className="avatar">
            <div className="w-12">
              <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-12">
              <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-12">
              <img src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp" />
            </div>
          </div>
          <div className="avatar avatar-placeholder">
            <div className="bg-base-200 text-gray-800 border-primary w-12">
              <span>+3k</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAdoptLoveBanner;
