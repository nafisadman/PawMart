import React, { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";

const MyItems = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const [totalRequests, setTotalRequests] = useState(0);
  const [myItems, setMyRequests] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStatus, setSelectedStatus] = useState([]); // Stores "available" or "sold"

  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(
          `http://localhost:3000/users-items?email=${user.email}&page=${currentPage - 1}&size=${itemsPerPage}&status=${selectedStatus.join(",")}`
        )
        .then((res) => {
          setMyRequests(res.data.result);
          setTotalRequests(res.data.totalRequest);
        })
        .catch(console.error);
    }
  }, [axiosSecure, currentPage, itemsPerPage, selectedStatus, user?.email]);

  const numberOfPages = Math.ceil(totalRequests / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()].map((e) => e + 1);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < pages.length) setCurrentPage(currentPage + 1);
  };

  // Helper to update status
  const handleStatusUpdate = (id, newStatus) => {
    axiosSecure.patch(`http://localhost:3000/donation-request-status/${id}`, { status: newStatus }).then((res) => {
      if (res.data.modifiedCount > 0) {
        const updatedRequests = myItems.map((item) =>
          item._id === id ? { ...item, itemStatus: newStatus } : item
        );
        setMyRequests(updatedRequests);
      }
    });
  };

  // Handle Delete
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this item?");
    if (!confirmDelete) return;

    axiosSecure.delete(`/requests/${id}`).then(() => {
      setMyRequests((prev) => prev.filter((item) => item._id !== id));
    });
  };

  // Filter Checkbox Logic
  const handleFilterChange = (status) => {
    setSelectedStatus((prev) => {
      if (prev.includes(status)) return prev.filter((s) => s !== status);
      return [...prev, status];
    });
  };

  const handleReset = () => {
    setSelectedStatus([]);
  };

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-4">
        <label className="label cursor-pointer gap-2 border px-3 rounded-lg">
          <span className="label-text">Available</span>
          <input
            type="checkbox"
            checked={selectedStatus.includes("available")}
            onChange={() => handleFilterChange("available")}
            className="checkbox checkbox-primary checkbox-sm"
          />
        </label>
        <label className="label cursor-pointer gap-2 border px-3 rounded-lg">
          <span className="label-text">Sold</span>
          <input
            type="checkbox"
            checked={selectedStatus.includes("sold")}
            onChange={() => handleFilterChange("sold")}
            className="checkbox checkbox-primary checkbox-sm"
          />
        </label>
        <button onClick={handleReset} className="btn btn-sm btn-ghost text-red-500">
          Reset
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Item Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Location</th>
              <th>Available From</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myItems.map((item, index) => (
              <tr key={item._id}>
                <th>{(currentPage - 1) * itemsPerPage + index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.imageUrl} alt={item.name} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                    </div>
                  </div>
                </td>
                <td>{item.category}</td>
                <td>$ {item.price}</td>
                <td>{item.location}</td>
                <td>{item.pickupDate}</td>
                <td>
                  <span className={`badge ${item.itemStatus === 'Not Sold' ? 'badge-success' : 'badge-neutral'}`}>
                    {item.itemStatus}
                  </span>
                </td>
                <td className="flex gap-2">
                  <Link to={`/dashboard/update-item/${item._id}`} className="btn btn-xs">
                    Edit
                  </Link>
                  <button className="btn btn-xs" onClick={() => handleDelete(item._id)}>
                    Delete
                  </button>
                  {item.itemStatus === "Not Sold" && (
                     <button onClick={() => handleStatusUpdate(item._id, "Sold")} className="btn btn-xs btn-outline">
                        Mark Sold
                     </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <div className="join">
          <button onClick={handlePrev} className="join-item btn" disabled={currentPage === 1}>
            «
          </button>
          {pages.map((page) => (
            <button
              key={page}
              className={`join-item btn ${page === currentPage ? "btn-active" : ""}`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
          <button onClick={handleNext} className="join-item btn" disabled={currentPage === pages.length}>
            »
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyItems;