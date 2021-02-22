import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

export default function SearchedCocktailCard(props) {
  return (
    <div className="mr-5">
      <Link to={`/cocktail/${props.id}`}>
        <h3>{props.name}</h3>
      </Link>
      <p>{props.category}</p>
      <img style={{ width: 250 }} src={props.img} />
    </div>
  );
}
