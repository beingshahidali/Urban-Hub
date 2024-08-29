import "./profile.scss";
import List from "../../components/list/List";
function Profile() {
  return (
    <div className="profile">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Information</button>
          </div>
          <div className="info">
            <span>
              Avatar :
              <img src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png" />
            </span>
            <span>
              Username : <b>John Doe</b>
            </span>
            <span>
              E-mail : <b>Jordanking @gmail.com</b>
            </span>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper"></div>
      </div>
    </div>
  );
}

export default Profile;
