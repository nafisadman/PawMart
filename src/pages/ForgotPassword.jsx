import React, { use, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLocation } from "react-router";
import { ToastContainer, toast } from "react-toastify";

const ForgotPassword = () => {
  useEffect(() => {
    document.title = "ToyTopia | Forgot Pass";
  }, []);

  const notify = () => toast("Email Link has been sent. Check your Spambox");

  const { user, resetPassword } = use(AuthContext);

  const location = useLocation();
  const email = location.state?.email || "";

  const handleForgotPassword = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;

    resetPassword(email)
      .then((result) => {
        console.log(result);
        notify();
        window.open('https://mail.google.com/mail/u/0/#spam/', '_blank');
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Reset Password now!</h1>
            <p className="py-6">
              Clicking the button will take you to your gmail
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleForgotPassword}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input w-full"
                  defaultValue={email}
                  placeholder="Email"
                  name="email"
                />
                <button className="btn btn-secondary mt-4" type="submit">Reset Password</button>
                <ToastContainer />
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
