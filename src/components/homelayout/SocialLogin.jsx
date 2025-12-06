import React from "react";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = ({handleContinueWithGoogle}) => {
  return (
    <div className="flex flex-col mt-4">
      <button onClick={handleContinueWithGoogle} className="btn btn-outline btn-secondary">
        <FcGoogle size={24} />
        Continue with Google
      </button>
    </div>
  );
};

export default SocialLogin;
