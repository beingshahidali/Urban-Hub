import { useContext, useState } from "react";
import "./profileUpdatePage.scss";
import { AuthContext } from "../../context/authContext";
import apiRequest from "../../lib/apiRequest";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MyLoader from "../../components/svg/MyLoader";

function ProfileUpdatePage() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state
  const navigate = useNavigate();
  const { currentUser, updateUser } = useContext(AuthContext);
  const [avatar, setAvatar] = useState(currentUser.avatar);
  const [fileName, setFileName] = useState("Choose a file");

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

    setLoading(true);

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
    } finally {
      setLoading(false); // Set loading to false after the upload is complete
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
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
        {loading ? (
          <div className="my-loader">
            <MyLoader />
          </div>
        ) : (
          <img
            src={
              avatar ||
              "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
            }
            alt=""
            className="avatar"
          />
        )}
        <div className="file-upload-container">
          <label htmlFor="file-upload" className="custom-file-upload">
            {fileName}
          </label>
          <input id="file-upload" type="file" onChange={handleFileChange} />
        </div>
      </div>
    </div>
  );
}

export default ProfileUpdatePage;
