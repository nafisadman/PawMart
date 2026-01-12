import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaUsers, FaBoxOpen, FaDollarSign } from "react-icons/fa";

const AdminStat = () => {
  const axiosSecure = useAxiosSecure();
  const [stats, setStats] = useState({
    users: 0,
    products: 0,
    orders: 0,
    revenue: 0
  });

  useEffect(() => {
    axiosSecure.get("https://b12-a11-pawmart-server.vercel.app/admin-stats").then((res) => {
      setStats(res.data);
    });
  }, [axiosSecure]);

  return (
    <div className="stats shadow w-full">
      
      {/* Revenue */}
      <div className="stat">
        <div className="stat-figure text-primary">
          <FaDollarSign className="text-3xl" />
        </div>
        <div className="stat-title">Total Revenue</div>
        <div className="stat-value text-primary">৳{stats.revenue}</div>
        <div className="stat-desc">From {stats.orders} orders</div>
      </div>

      {/* Users */}
      <div className="stat">
        <div className="stat-figure text-secondary">
          <FaUsers className="text-3xl" />
        </div>
        <div className="stat-title">Total Users</div>
        <div className="stat-value text-secondary">{stats.users}</div>
      </div>

      {/* Products */}
      <div className="stat">
        <div className="stat-figure text-secondary">
          <FaBoxOpen className="text-3xl" />
        </div>
        <div className="stat-title">Total Items</div>
        <div className="stat-value">{stats.products}</div>
        <div className="stat-desc">Available for adoption/sale</div>
      </div>

    </div>
  );
};

export default AdminStat;