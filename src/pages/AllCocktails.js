import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

const axios = require("axios");

export default function AllCocktails() {
  const [cocktailList, set_cocktailList] = useState([]);

  useEffect(() => {
    async function getCocktailList() {
      const res = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
      );
      set_cocktailList(res.data.drinks);
    }
    getCocktailList();
  }, []);

  // console.log("hello");
  //   console.log(cocktailList.strCategory);

  return (
    <div>
      <h2 className="mt-4 mb-2">Cocktail Explorer!</h2>
      <p>You can find cocktail names and images by clicking one of the list!</p>
      <ul className="list-group">
        {cocktailList.map((cocktail, index) => {
          return (
            <li className="list-group-item" key={index}>
              <NavLink to={`/cocktailImage/${cocktail.strCategory}`}>
                {cocktail.strCategory}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
