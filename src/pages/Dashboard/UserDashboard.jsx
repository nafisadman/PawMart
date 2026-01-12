import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Welcome from "../../components/Dashboard/Welcome";
import AdminStat from "../../components/Dashboard/AdminStat";
import RecentRequest from "../../components/Dashboard/RecentRequest";

import DonationRequestsChart from "../../components/Dashboard/DonationRequestsChart";

const UserDashboard = () => {
  const { role } = useContext(AuthContext);

  return (
    <div className="p-4"> 
      {/* Welcome */}
      <Welcome></Welcome>

      {/* Donor */}
      {role == 'user' && <div>Hello! You are in the user dashboard</div>}
      {role == 'user' && <RecentRequest></RecentRequest>}

      {/* Admin & Volunteer */}
      {(role === "Admin" || role === "Volunteer") && (
        <div className="flex flex-col gap-6 mt-6">
            <div className="flex justify-center">
                <AdminStat></AdminStat>
            </div>
        </div>
      )}

      {
        role == "Admin" && <DonationRequestsChart></DonationRequestsChart>
      }
    </div>
  );
};

export default UserDashboard;