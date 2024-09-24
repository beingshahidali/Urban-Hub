import { useState } from "react";
import "./slider.scss";

function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(null);
  const changeSlide = (direction) => {
    setImageIndex((prevIndex) => {
      if (direction === "right") {
        return (prevIndex + 1) % images.length;
      } else {
        return (prevIndex - 1 + images.length) % images.length;
      }
    });
  };

  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
          <div className="arrow">
            <img src="/arrow.png" onClick={() => changeSlide("left")} />
          </div>
          <div className="imageContainer">
            <img src={images[imageIndex]} />
          </div>
          <div className="arrow">
            <img
              src="/arrow.png"
              className="right"
              onClick={() => changeSlide("right")}
            />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>
      )}
      <div className="bigImage">
        <img src={images[0]} onClick={() => setImageIndex(0)} />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            key={index}
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}
export default Slider;
