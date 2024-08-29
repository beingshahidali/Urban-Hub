import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import { singlePostData, userData } from "../../lib/dummyData";
function SinglePage() {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="pin" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">${singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="usr image" />
                <span> {userData.name}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Rentor is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" />
              <div className="featureText">
                <span>Pet policies </span>
                <p>Pets allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x rent in the total household income</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" />
              <span>80sqFt</span>
            </div>
            <div className="size">
              <img src="/bed.png" />
              <span>2 bedroom</span>
            </div>
            <div className="size">
              <img src="/bath.png" />
              <span>1 bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" />
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" />
              <div className="featureText">
                <span>Bus stop </span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" />
              Send a message
            </button>
            <button>
              <img src="/save.png" />
              Save the place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SinglePage;
