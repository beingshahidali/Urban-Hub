import { Await, Link, useLoaderData, useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import "./profilePage.scss";
import { lazy, Suspense, useContext } from "react";
import { AuthContext } from "../../context/authContext.jsx";
import { toast } from "react-toastify";
const List = lazy(() => import("../../components/list/List"));
const Chat = lazy(() => import("../../components/chat/Chat"));

function ProfilePage() {
  const data = useLoaderData();
  console.log(data);
  const navigate = useNavigate();
  const { updateUser, currentUser } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      toast.success("Logged out successfully");
      // localStorage.removeItem("user");

      updateUser(null);
      navigate("/");
    } catch (e) {
      throw new Error("Couldn't log out" + e);
    }
  };
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <Link to="/profile/update">
              <button>Update Profile</button>
            </Link>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img
                src={
                  currentUser?.avatar ||
                  "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                }
                alt=""
              />
            </span>
            <span>
              Username: <b>{currentUser?.username}</b>
            </span>
            <span>
              E-mail: <b>{currentUser?.email}</b>
            </span>
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <Link to="/add">
              <button>Create New Post</button>
            </Link>
          </div>
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) => <List posts={postResponse.data.userPosts} />}
            </Await>
          </Suspense>
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) => <List posts={postResponse.data.savedPosts} />}
            </Await>
          </Suspense>
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
