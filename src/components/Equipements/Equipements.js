import React from "react";
import Collapse from "../Collapse/Collapse";
import datas from "../../data/data";

const Equipements = () => {
  const { id } = useParams();
  const logementValue = datas.find((element) => element.id === id);

  return (
    <div className="equipements-lgt">
      {logementValue.map((data) => {
        return (
          <div key={data.id} className="about_main_collapse">
            <Collapse title="Description" content={data.description} />
            <Collapse title="Equipements" content={data.equipments} />
          </div>
        );
      })}
    </div>
  );
};

export default Equipements;
