import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router";
import Swal from "sweetalert2";

const AllPets = () => {
  const axiosSecure = useAxiosSecure();

  const [totalRequests, setTotalRequests] = useState(0);
  const [items, setItems] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // FIX: Calling the new ADMIN endpoint instead of user-specific endpoint
    axiosSecure
      .get(`https://b12-a11-pawmart-server.vercel.app/admin/all-items?page=${currentPage - 1}&size=${itemsPerPage}`)
      .then((res) => {
        setItems(res.data.result);
        setTotalRequests(res.data.totalRequest);
      })
      .catch(console.error);
  }, [axiosSecure, currentPage, itemsPerPage]);

  const numberOfPages = Math.ceil(totalRequests / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()].map((e) => e + 1);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < pages.length) setCurrentPage(currentPage + 1);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/delete/${id}`).then((res) => {
            if (res.data.deletedCount > 0) {
                Swal.fire("Deleted!", "Item has been deleted.", "success");
                setItems((prev) => prev.filter((item) => item._id !== id));
            }
        });
      }
    });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-5">All Pets & Items ({totalRequests})</h2>
      
      {/* Table */}
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Item Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Owner Email</th> {/* Added Owner Email for Admin */}
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
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
                <td>${item.price}</td>
                <td className="text-xs opacity-70">{item.email}</td>
                <td>
                   <span className={`badge ${item.itemStatus === 'Not Sold' ? 'badge-success' : 'badge-neutral'}`}>
                    {item.itemStatus}
                  </span>
                </td>
                <td className="flex gap-2">
                  <Link to={`/dashboard/update-item/${item._id}`} className="btn btn-xs btn-primary">
                    Edit
                  </Link>
                  <button className="btn btn-xs btn-error" onClick={() => handleDelete(item._id)}>
                    Delete
                  </button>
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

export default AllPets;