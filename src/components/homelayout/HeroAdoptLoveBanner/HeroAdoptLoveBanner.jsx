import React from "react";

const HeroAdoptLoveBanner = () => {
  return (
    <section className="relative mt-20 overflow-hidden rounded-box bg-secondary/10">
      {/* Background Image */}
      <img
        src="/public/dog-img.png"
        alt="Adopt a pet"
        className="absolute inset-0 h-full w-full object-contain opacity-90 dark:opacity-70 pointer-events-none"
      />

      {/* Dark / Light overlay for contrast */}
      <div className="absolute inset-0 bg-base-100/60 dark:bg-base-300/70"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Left: Text */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-fun leading-tight text-base-content">
              Adopt Love,
              <br />
              foster happiness
            </h1>

            <p className="mt-6 max-w-md text-base-content/80">
              With a focus on matching the right pet with the right family,
              PetFoster makes it easy to adopt love and foster happiness.
            </p>

            <button className="btn btn-primary rounded-full mt-8">
              View Pets
            </button>
          </div>

          {/* Right: Avatars */}
          <div className="flex justify-center lg:justify-end">
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
                <div className="bg-base-200 text-base-content border border-primary w-12">
                  <span>+3k</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAdoptLoveBanner;
