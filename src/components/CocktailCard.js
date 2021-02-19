import React from "react";
import { BrowserRouter as Router, Link, useParams } from "react-router-dom";

export default function CocktailCard(props) {
  //   console.log(props.idDrink);
  return (
    <div>
      <Link to={`/cocktail/${props.idDrink}`}>
        <p>{props.strDrink}</p>
      </Link>
      <img
        src={props.strDrinkThumb}
        alt={`${props.strDrink}'s image`}
        style={{ width: 200 }}
      />
    </div>
  );
}
