import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaTrash, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const [users, setUsers] = useState([]);

  // Fetch Users
  useEffect(() => {
    axiosSecure.get("https://b12-a11-pawmart-server.vercel.app/users").then((res) => {
      setUsers(res.data);
    });
  }, [axiosSecure]);

  // ✅ UPDATED: Handle Make Manager
  const handleMakeManager = (user) => {
    // Calling the new /users/manager/:id endpoint
    axiosSecure.patch(`https://b12-a11-pawmart-server.vercel.app/users/manager/${user._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        Swal.fire("Success", `${user.name} is now a Manager!`, "success");
        // Update UI locally to reflect "manager" role
        const updatedUsers = users.map((u) =>
          u._id === user._id ? { ...u, role: "manager" } : u
        );
        setUsers(updatedUsers);
      }
    });
  };

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`https://b12-a11-pawmart-server.vercel.app/users/${user._id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "User has been deleted.",
                icon: "success"
              });
              const remainingUsers = users.filter((u) => u._id !== user._id);
              setUsers(remainingUsers);
            }
          });
      }
    });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-5">All Users: {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {/* ✅ Logic updated to check for 'manager' or 'admin' */}
                  {user.role === "manager" ? (
                    <span className="font-bold text-success">Manager</span>
                  ) : user.role === "admin" ? (
                    <span className="font-bold text-primary">Admin</span>
                  ) : (
                    <button
                      onClick={() => handleMakeManager(user)}
                      className="btn btn-ghost btn-xs bg-orange-200"
                      title="Make Manager"
                    >
                      <FaUserShield className="text-orange-600" />
                    </button>
                  )}
                </td>
                <td>
                  <button 
                    onClick={() => handleDeleteUser(user)}
                    className="btn btn-ghost btn-xs text-red-600"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;