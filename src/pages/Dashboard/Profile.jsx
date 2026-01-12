import React, { useContext, useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaCamera, FaEdit, FaSave, FaUserCircle } from "react-icons/fa";

const Profile = () => {
  useTitle("My Profile");
  const { user, updateUser, setUser } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [uploading, setUploading] = useState(false); // For image upload spinner

  // Data States
  const [profileData, setProfileData] = useState({});
  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);

  // Form States (Controlled Inputs)
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedUpazila, setSelectedUpazila] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  // 1. Fetch Location Data & User Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [distRes, upzRes, userRes] = await Promise.all([
          axios.get("/districts.json"),
          axios.get("/upazilas.json"),
          axiosSecure.get(`/users/${user?.email}`), // Fetch by specific email
        ]);

        setDistricts(distRes.data.districts);
        setUpazilas(upzRes.data.upazilas);
        
        // Set User Data
        setProfileData(userRes.data);
        setSelectedDistrict(userRes.data.district || "");
        setSelectedUpazila(userRes.data.upazila || "");
        setPreviewImage(userRes.data.userPhotoUrl || user?.photoURL);
        
        setLoading(false);
      } catch (error) {
        console.error("Error fetching profile data:", error);
        setLoading(false);
      }
    };

    if (user?.email) {
      fetchData();
    }
  }, [user?.email, axiosSecure]);

  // 2. Handle Image Preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  // 3. Handle Form Update
  const handleUpdate = async (e) => {
    e.preventDefault();
    setUploading(true);

    const form = e.target;
    const name = form.name.value;
    const photoFile = form.photo.files[0];

    let finalPhotoUrl = profileData.userPhotoUrl;

    try {
      // A. Upload Image to ImgBB if a new file is selected
      if (photoFile) {
        const imageFormData = new FormData();
        imageFormData.append("image", photoFile);

        const imgBbRes = await axios.post(
          `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`,
          imageFormData
        );

        if (imgBbRes.data.success) {
          finalPhotoUrl = imgBbRes.data.data.display_url;
        }
      }

      // B. Prepare Payload
      const updatedProfile = {
        name,
        userPhotoUrl: finalPhotoUrl,
        district: selectedDistrict,
        upazila: selectedUpazila,
      };

      // C. Update Firebase Profile (for Navbar sync)
      await updateUser({ displayName: name, photoURL: finalPhotoUrl });
      
      // Update Local Auth State
      setUser((prev) => ({ ...prev, displayName: name, photoURL: finalPhotoUrl }));

      // D. Update Database
      const dbRes = await axiosSecure.patch(`/users/${user?.email}`, { // Use email to identify user
         ...updatedProfile
      });

      if (dbRes.data.modifiedCount > 0 || dbRes.data.acknowledged) {
        setProfileData({ ...profileData, ...updatedProfile });
        Swal.fire("Success", "Profile updated successfully!", "success");
        setIsEditing(false);
      }
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Failed to update profile", "error");
    } finally {
      setUploading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <span className="loading loading-bars loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10">
      
      {/* Header Card */}
      <div className="card bg-base-100 shadow-xl border border-base-200 overflow-hidden">
        
        {/* Banner / Cover (Optional visual flair) */}
        <div className="h-32 bg-gradient-to-r from-primary/20 to-secondary/20 w-full"></div>

        <div className="card-body -mt-16">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-end">
            
            {/* Avatar Section */}
            <div className="relative">
              <div className="avatar">
                <div className="w-32 h-32 rounded-full ring ring-base-100 ring-offset-base-100 ring-offset-2 shadow-2xl">
                   <img 
                     src={previewImage || "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"} 
                     alt="Profile" 
                     className="object-cover"
                   />
                </div>
              </div>
              {/* Role Badge */}
              <div className="absolute bottom-2 right-0">
                 <span className="badge badge-primary badge-lg font-bold shadow-md uppercase">
                   {profileData.role || "User"}
                 </span>
              </div>
            </div>

            {/* Name & Email Section */}
            <div className="flex-1 mb-2">
              <h2 className="text-3xl font-bold text-base-content">
                {profileData.name || user?.displayName}
              </h2>
              <p className="text-base-content/60 flex items-center gap-2">
                 <FaUserCircle /> {profileData.email || user?.email}
              </p>
              <div className="mt-2 flex gap-2">
                 {profileData.district && (
                    <span className="badge badge-outline">{profileData.district}</span>
                 )}
                 {profileData.upazila && (
                    <span className="badge badge-outline">{profileData.upazila}</span>
                 )}
              </div>
            </div>

            {/* Edit Toggle Button */}
            <button 
              onClick={() => setIsEditing(!isEditing)}
              className={`btn ${isEditing ? 'btn-ghost' : 'btn-primary'}`}
            >
              {isEditing ? "Cancel" : <><FaEdit /> Edit Profile</>}
            </button>
          </div>
        </div>
      </div>

      {/* Edit Form Section */}
      <div className={`mt-8 transition-all duration-500 ease-in-out ${isEditing ? 'opacity-100 translate-y-0' : 'opacity-50 grayscale pointer-events-none'}`}>
        <div className="card bg-base-100 shadow-lg border border-base-200">
          <div className="card-body">
            <h3 className="card-title text-xl mb-4">Profile Details</h3>
            
            <form onSubmit={handleUpdate}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Name */}
                <div className="form-control">
                  <label className="label font-semibold">Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    defaultValue={profileData.name} 
                    className="input input-bordered w-full" 
                    disabled={!isEditing}
                    required
                  />
                </div>

                {/* Email (Read Only) */}
                <div className="form-control">
                  <label className="label font-semibold">Email Address</label>
                  <input 
                    type="email" 
                    defaultValue={profileData.email} 
                    className="input input-bordered w-full bg-base-200 cursor-not-allowed" 
                    readOnly 
                    disabled
                  />
                </div>

                {/* District */}
                <div className="form-control">
                  <label className="label font-semibold">District</label>
                  <select 
                    value={selectedDistrict} 
                    onChange={(e) => {
                        setSelectedDistrict(e.target.value);
                        setSelectedUpazila(""); // Reset upazila when district changes
                    }}
                    className="select select-bordered w-full"
                    disabled={!isEditing}
                  >
                    <option value="" disabled>Select District</option>
                    {districts.map((dist) => (
                      <option key={dist.id} value={dist.id}>{dist.name}</option>
                    ))}
                  </select>
                </div>

                {/* Upazila */}
                <div className="form-control">
                  <label className="label font-semibold">Upazila</label>
                  <select 
                    value={selectedUpazila} 
                    onChange={(e) => setSelectedUpazila(e.target.value)}
                    className="select select-bordered w-full"
                    disabled={!isEditing || !selectedDistrict}
                  >
                    <option value="" disabled>Select Upazila</option>
                    {upazilas
                      .filter((upz) => upz.district_id === selectedDistrict)
                      .map((upz) => (
                        <option key={upz.id} value={upz.name}>{upz.name}</option>
                      ))}
                  </select>
                </div>

                {/* Photo Upload */}
                <div className="form-control md:col-span-2">
                  <label className="label font-semibold">Profile Photo</label>
                  <div className="flex items-center gap-4">
                     <input 
                        type="file" 
                        name="photo"
                        accept="image/*"
                        className="file-input file-input-bordered file-input-primary w-full max-w-xs" 
                        disabled={!isEditing}
                        onChange={handleImageChange}
                     />
                     <div className="text-xs opacity-60">
                        {isEditing ? "Upload a new photo to update" : "Enable editing to change photo"}
                     </div>
                  </div>
                </div>

              </div>

              {/* Submit Button */}
              {isEditing && (
                <div className="mt-8 flex justify-end">
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-wide"
                    disabled={uploading}
                  >
                    {uploading ? (
                       <span className="loading loading-spinner"></span>
                    ) : (
                       <><FaSave /> Save Changes</>
                    )}
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Profile;