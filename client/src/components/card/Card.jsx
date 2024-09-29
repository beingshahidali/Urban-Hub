import { Link } from "react-router-dom";
import "./card.scss";

function Card({ item }) {
  // console.log({ item });
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.images[0]} />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}> {item.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="bedroom " />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="bathroom " />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/save.png" />
            </div>
            <div className="icon">
              <img src="/chat.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
