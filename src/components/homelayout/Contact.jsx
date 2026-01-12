import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div className="card w-full max-w-4xl bg-base-100 shadow-xl flex-col lg:flex-row overflow-hidden">
        
        {/* Left Side: Info */}
        <div className="w-full lg:w-1/2 bg-primary text-primary-content p-10 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-6">Have questions about a listing or need support? We are here to help you.</p>
          
          <div className="space-y-4">
            <p className="flex items-center gap-2">
              <span className="font-bold">Email:</span> sadmannafi789@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <span className="font-bold">Phone:</span> +880 177 251 3803
            </p>
            <p className="flex items-center gap-2">
              <span className="font-bold">Address:</span> Dhaka, Bangladesh
            </p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full lg:w-1/2 p-10">
          <form className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span><br />
              </label>
              <input type="text" placeholder="Your name" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span><br />
              </label>
              <input type="email" placeholder="Your email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span><br />
              </label>
              <textarea className="textarea textarea-bordered h-24" placeholder="How can we help?"></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Send Message</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;