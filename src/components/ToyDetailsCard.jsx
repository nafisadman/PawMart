import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { useParams } from "react-router";
import toast from "react-hot-toast";

const ToyDetailsCard = ({ toyDetails }) => {
  const { _id, name, location, imageUrl, description, price, category, email } = toyDetails;
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    axios
      .get(`https://b12-a11-pawmart-server.vercel.app/services/${id}`)
      .then((res) => setService(res.data));
  }, [id]);

  const handleOrder = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = {
      productId: _id,
      productName: name,
      buyerName: user?.displayName,
      buyerEmail: user?.email,
      quantity: parseInt(form.quantity.value),
      price: parseInt(service?.price),
      address: form.address.value,
      phoneNumber: form.phoneNumber.value,
      additionalNote: form.additionalNote.value,
      date: new Date(),
    };

    axios
      .post("https://b12-a11-pawmart-server.vercel.app/orders", formData)
      .then(() => {
        document.getElementById("order_modal").close();
        toast.success("Order placed successfully!");
      });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="card bg-base-100 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-10">
          {/* Image */}
          <figure className="rounded-xl overflow-hidden">
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-80 lg:h-full object-cover"
            />
          </figure>

          {/* Content */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-base-content">{name}</h1>

            <p className="text-2xl font-semibold text-primary">
              ৳{price}
            </p>

            <div className="divider" />

            <p className="text-base-content/70 leading-relaxed">
              {description}
            </p>

            <div className="space-y-1 text-sm text-base-content/70">
              <p>
                <span className="font-medium">Category:</span> {category}
              </p>
              <p>
                <span className="font-medium">Seller:</span> {email}
              </p>
              <p>
                <span className="font-medium">Pickup Location:</span> {location}
              </p>
            </div>

            <button
              className="btn btn-primary w-full sm:w-fit mt-6"
              onClick={() => document.getElementById("order_modal").showModal()}
            >
              Adopt / Order
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <dialog id="order_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-base-100">
          <h3 className="font-bold text-lg mb-4">Order Details</h3>

          <form onSubmit={handleOrder} className="space-y-4">
            <div className="form-control">
              <label className="label">Product</label>
              <input className="input input-bordered" value={name} disabled />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">Buyer Name</label>
                <input
                  className="input input-bordered"
                  value={user?.displayName}
                  disabled
                />
              </div>

              <div className="form-control">
                <label className="label">Email</label>
                <input
                  className="input input-bordered"
                  value={user?.email}
                  disabled
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">Price</label>
                <input
                  className="input input-bordered"
                  value={service?.price}
                  disabled
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">Address</label>
              <input
                name="address"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">Phone</label>
              <input
                name="phoneNumber"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">Additional Note</label>
              <textarea
                name="additionalNote"
                className="textarea textarea-bordered"
              />
            </div>

            <div className="modal-action">
              <button className="btn btn-primary" type="submit">
                Confirm Order
              </button>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => document.getElementById("order_modal").close()}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </section>
  );
};

export default ToyDetailsCard;
