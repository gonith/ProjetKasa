import React from "react";
import { useParams } from "react-router-dom";
import datas from "../../data/data";
import "./_infologement.scss";
import Etoiles from "../Stars/Stars";
import Collapse from "../Collapse/Collapse";

const InfoLogement = () => {
  const { id } = useParams();
  const logementValue = datas.find((element) => element.id === id);
  const etoiles = Array.from({ length: 5 }, () => {});

  console.log(logementValue)
  console.log(logementValue.tags);
  console.log(logementValue.rating);

  return (
    <>
      <div className="global-container">
        <div className="first-container">
          <h2 className="lgt-title">{logementValue.title}</h2>
          <h3 className="lgt-location">{logementValue.location}</h3>

          <div className="contain-tags">
            {logementValue.tags.map((tag, index) => {
              return (
                <p key={index} className="tagsvalue">
                  {tag}
                </p>
              );
            })}
          </div>
        </div>

        <div className="scnd-container">
          <div className="name-pic">
            <h3 className="name-proprio">{logementValue.host.name}</h3>
            <img
              src={logementValue.host.picture}
              alt="Photo-propriétaire"
              className="photo"
            />
          </div>

          <div className="stars">
            <Etoiles rating={logementValue.rating} />
          </div>
        </div>
      </div>

      <div className="collapse-lgt">
        <Collapse
          key="collapse1"
          title="Description"
          content={logementValue.description}
        />
        <Collapse
          key="collapse2"
          title="Equipements"
          content={logementValue.equipments}
        />
      </div>
    </>
  );
};

export default InfoLogement;
