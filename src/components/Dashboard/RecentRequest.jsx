import React, { useCallback, useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import axios from "axios";
import { Link } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";

const RecentRequest = () => {
  const { user } = useContext(AuthContext);

  const axiosSecure = useAxiosSecure();

  console.log(user?.email);

  const [upazilas, setUpazilas] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [recentRequests, setRecentRequests] = useState([]);

  const fetchUsers = useCallback(() => {
    axios.get("/upazilas.json").then((res) => {
      setUpazilas(res.data.upazilas);
    });

    axios.get("/districts.json").then((res) => {
      setDistricts(res.data.districts);
    });

    axiosSecure.get(`/services/${user?.email}`).then((res) => {
      console.log("/services/:email", res.data);
      setRecentRequests(res.data);
    });
  }, [axiosSecure, user?.email]);

  useEffect(() => fetchUsers(), [fetchUsers]);

  return (
    <div>
      <h2 className="text-3xl font-bold text-primary">Recent Requests</h2>
      {recentRequests.length > 0 ? (
        <>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Item Name</th>
                  <th>Selling Location</th>
                  <th>Available From</th>
                  <th>Item Status</th>
                  <th>Donor Info</th>
                </tr>
              </thead>
              <tbody>
                {recentRequests.map((service, index) => (
                  <tr>
                    <th>{index + 1}</th>
                    <td>{service.name}</td>
                    <td>
                      {service.location}
                    </td>
                    <td>
                      {service?.pickupDate}
                    </td>
                    <td>{service?.itemStatus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link to="/dashboard/my-donation-requests" className="btn btn-primary">
            View My All Requests
          </Link>
        </>
      ) : (
        <>
          <p>Your recently added items will show up here. To see your recent items - first add an request</p>
        </>
      )}
    </div>
  );
};

export default RecentRequest;
