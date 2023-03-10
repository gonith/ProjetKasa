import React from "react";
import Cards from "../Cards/Cards";
import datas from "../../data/data";
import "./_container.scss";

const Container = () => {
  return (
    <main className="container-cards">
      {datas.map((data) => {
        console.log(data);
        return (
          <Cards
            key={data.id}
            id={data.id}
            title={data.title}
            cover={data.cover}
          />
        );
      })}
    </main>
  );
};

export default Container;
