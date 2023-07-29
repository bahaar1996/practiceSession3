import React from "react";
import Card from "./Card";
const Cards = ({ data ,distpatch}) => {
  return (
    <div>
      {data.map((item) => {
        return <Card data={item} distpatch={distpatch}/>;
      })}
    </div>
  );
};

export default Cards;
