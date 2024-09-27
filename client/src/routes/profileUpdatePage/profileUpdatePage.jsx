import { useContext, useState } from "react";
import "./profileUpdatePage.scss";
import { AuthContext } from "../../context/authContext";
import apiRequest from "../../lib/apiRequest";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import UploadWidget from "../../components/uploadWidget/UploadWidget";
import axios from "axios";

function ProfileUpdatePage() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { currentUser, updateUser } = useContext(AuthContext);
  const [avatar, setAvatar] = useState(currentUser.avatar);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);
    try {
      const res = await apiRequest.put(
        `/users/${currentUser.id}`,
        {
          username,
          email,
          password,
          avatar,
        },
        { withCredentials: true }
      );

      updateUser(res.data);
      toast.success("User updated successfully");
      navigate("/profile");
    } catch (err) {
      setError(err.message);
      toast.error("Failed to update user");
    }
  };

  const uploadImage = async (file) => {
    const url = `https://api.cloudinary.com/v1_1/dosizus5p/image/upload`;
    const uploadPreset = "Urban-Hub";

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    try {
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const imgUrl = response.data.secure_url;
      setAvatar(imgUrl);
      return response.data;
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  // Usage example with a file input
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      uploadImage(file);
    }
  };

  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              defaultValue={currentUser?.username}
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={currentUser?.email}
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          {error && <span> {error}</span>}
          <button>Update</button>
        </form>
      </div>
      <div className="sideContainer">
        <img
          src={
            avatar ||
            "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt=""
          className="avatar"
        />
        <input type="file" onChange={handleFileChange} />
      </div>
    </div>
  );
}

export default ProfileUpdatePage;
