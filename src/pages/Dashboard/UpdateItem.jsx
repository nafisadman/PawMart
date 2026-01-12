import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router"; // react-router-dom for v6
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2"; // Optional: for nice alerts, or use window.alert

const UpdateItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    location: "",
    price: "",
    pickupDate: "",
    description: "",
  });

  // 1. Fetch existing data when page loads
  useEffect(() => {
    axiosSecure.get(`http://localhost:3000/services/details/${id}`)
      .then((res) => {
        setFormData(res.data);
      })
      .catch((err) => console.error(err));
  }, [id, axiosSecure]);

  // 2. Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 3. Handle Form Submit
  const handleUpdate = async (e) => {
    e.preventDefault();
    
    try {
      const res = await axiosSecure.put(`http://localhost:3000/update-item/${id}`, formData);
      if (res.data.modifiedCount > 0) {
        // Success Message
        alert("Item updated successfully!"); 
        // Redirect back to the list
        navigate("/dashboard/"); 
      } else {
         alert("No changes made.");
      }
    } catch (error) {
      console.error(error);
      alert("Error updating item");
    }
  };

  return (
    <div className="p-6 bg-base-200 rounded-lg shadow-md max-w-4xl mx-auto my-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-primary">Update Item</h2>
      
      <form onSubmit={handleUpdate}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="form-control">
            <label className="label"><span className="label-text">Item Name</span></label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className="input input-bordered" 
              required 
            />
          </div>

          {/* Category */}
          <div className="form-control">
            <label className="label"><span className="label-text">Category</span></label>
            <select 
              name="category" 
              value={formData.category} 
              onChange={handleChange} 
              className="select select-bordered"
            >
              <option value="Pets">Pets</option>
              <option value="Medicine">Medicine</option>
              <option value="Accessories">Accessories</option>
              <option value="Food">Food</option>
            </select>
          </div>

          {/* Location */}
          <div className="form-control">
            <label className="label"><span className="label-text">Location</span></label>
            <input 
              type="text" 
              name="location" 
              value={formData.location} 
              onChange={handleChange} 
              className="input input-bordered" 
              required 
            />
          </div>

          {/* Price */}
          <div className="form-control">
            <label className="label"><span className="label-text">Price (BDT)</span></label>
            <input 
              type="number" 
              name="price" 
              value={formData.price} 
              onChange={handleChange} 
              className="input input-bordered" 
            />
          </div>

          {/* Date */}
          <div className="form-control">
            <label className="label"><span className="label-text">Available From</span></label>
            <input 
              type="date" 
              name="pickupDate" 
              value={formData.pickupDate} 
              onChange={handleChange} 
              className="input input-bordered" 
            />
          </div>
        </div>

        {/* Description */}
        <div className="form-control mt-4">
          <label className="label"><span className="label-text">Description</span></label>
          <textarea 
            name="description" 
            value={formData.description} 
            onChange={handleChange} 
            className="textarea textarea-bordered h-24" 
            required
          ></textarea>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Update Item</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateItem;