import React, { useState } from "react";
import { useParams } from "react-router-dom";
import arrowLeft from "../../assets/img/arrowleft.png";
import arrowRight from "../../assets/img/arrowright.png";
import datas from "../../data/data";
import "./_carrousel.scss";

const Carrousel = () => {
  const { id } = useParams();
  const logementValue = datas.find((element) => element.id === id);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextPic = () => {
    setCurrentImageIndex(currentImageIndex + 1)
    if (currentImageIndex === logementValue.pictures.length - 1)
        setCurrentImageIndex(0);
  };

  const prevPic = () => {
    setCurrentImageIndex(currentImageIndex - 1)
        if(currentImageIndex === 0)
            setCurrentImageIndex(logementValue.pictures.length - 1)
  };

  return (
    <div className="carousel">
      <div className="carousel-images">
        {logementValue.pictures.map((picture, index) => (
          <img
            key={index}
            src={picture}
            alt={`Image ${index}`}
            className={index === currentImageIndex ? "active" : ""}
          />
        ))}
      </div>
        <div className="carousel-buttons">
          <img src={arrowLeft} alt="Previous" onClick={prevPic} />
          <p className="slideCount">{currentImageIndex + 1} / {logementValue.pictures.length}</p>
          <img src={arrowRight} alt="Next" onClick={nextPic} />
        </div>
    </div>
  );
};

export default Carrousel;
