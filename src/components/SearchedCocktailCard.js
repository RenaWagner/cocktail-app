import React from "react";

export default function SearchedCocktailCard(props) {
  return (
    <div className="mr-5">
      <h3>{props.name}</h3>
      <p>{props.category}</p>
      <img style={{ width: 250 }} src={props.img} />
    </div>
  );
}
