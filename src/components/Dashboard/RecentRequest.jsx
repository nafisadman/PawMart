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

    axiosSecure.get(`https://b12-a11-pawmart-server.vercel.app/recent-requests/${user?.email}`).then((res) => {
      console.log("/services/:email", res.data);
      setRecentRequests(res.data);
    });
  }, [axiosSecure, user?.email]);

  const handleStatusUpdate = (id, newStatus) => {
    axiosSecure.patch(`https://b12-a11-pawmart-server.vercel.app/donation-request-status/${id}`, { status: newStatus }).then((res) => {
      if (res.data.modifiedCount > 0) {
        // FIX: Change 'myItems' to 'recentRequests'
        const updatedRequests = recentRequests.map((item) => (item._id === id ? { ...item, itemStatus: newStatus } : item));
        // FIX: Change 'setMyRequests' to 'setRecentRequests'
        setRecentRequests(updatedRequests);
      }
    });
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this item?");
    if (!confirmDelete) return;

    // Make sure the URL matches the backend route created above
    axiosSecure
      .delete(`https://b12-a11-pawmart-server.vercel.app/requests/${id}`)
      .then((res) => {
        // Check if the delete was successful in the database
        if (res.data.deletedCount > 0) {
          // Filter out the deleted item from the UI state
          const remainingRequests = recentRequests.filter((item) => item._id !== id);
          setRecentRequests(remainingRequests);
          alert("Item deleted successfully"); // Optional: User feedback
        }
      })
      .catch((err) => {
        console.error("Error deleting item:", err);
      });
  };

  useEffect(() => fetchUsers(), [fetchUsers]);

  return (
    <div>
      <h2 className="text-3xl font-bold text-primary">Recent Items</h2>
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
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {recentRequests.map((service, index) => (
                  <tr>
                    <th>{index + 1}</th>
                    <td>{service.name}</td>
                    <td>{service.location}</td>
                    <td>{service?.pickupDate}</td>
                    <td>{service?.itemStatus}</td>
                    <td>{service?.price}</td>
                    <td className="flex gap-2">
                      <Link to={`/dashboard/update-item/${service._id}`} className="btn btn-xs">
                        Edit
                      </Link>
                      <button className="btn btn-xs" onClick={() => handleDelete(service._id)}>
                        Delete
                      </button>
                      {service.itemStatus === "Not Sold" && (
                        <button onClick={() => handleStatusUpdate(service._id, "Sold")} className="btn btn-xs btn-outline">
                          Mark Sold
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link to="/dashboard/my-items" className="btn btn-primary">
            View My All Items
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
