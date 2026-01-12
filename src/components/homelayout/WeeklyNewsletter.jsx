import React, { useState } from "react";
import toast from "react-hot-toast";

const WeeklyNewsletter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      toast.success("Thanks for subscribing!");
      setEmail("");
      setLoading(false);
    }, 500);
  };

  return (
    <section className="flex flex-col items-center bg-primary/5 py-20 gap-8">
      <div className="text-center max-w-xl">
        <h3 className="text-3xl font-bold mb-2">Stay Updated</h3>
        <p className="text-gray-600">
          Subscribe to our newsletter for tips on pet care, new listings, and community updates.
        </p>
      </div>
      <form onSubmit={handleSubscribe} className="join w-full max-w-md">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input input-bordered join-item flex-1"
          required
        />
        <button 
          type="submit" 
          disabled={loading}
          className="btn btn-primary join-item"
        >
          {loading ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
    </section>
  );
};

export default WeeklyNewsletter;