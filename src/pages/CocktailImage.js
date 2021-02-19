import CocktailCard from "../components/CocktailCard";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

const axios = require("axios");

export default function CocktailImage() {
  const [cocktailData, set_cocktailData] = useState([]);

  const route_prameter = useParams();
  //   console.log("parameter", route_prameter);
  const category = route_prameter.category;
  //   console.log("category", category);
  const categoryNoSpace = category.replace(/ /g, "_");
  //   console.log("categoryNoSpace", categoryNoSpace);
  const queryParam = encodeURIComponent(categoryNoSpace);
  //   console.log(queryParam);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${queryParam}`
      );
      set_cocktailData(res.data.drinks); //object
    }
    fetchData();
  }, [queryParam]);

  //   console.log(cocktailData);

  return (
    <div>
      <h2 className="mt-3 mb-2">{category}</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {cocktailData.map((cocktail) => {
          return (
            <div className="mt-4 mr-3" key={cocktail.idDrink}>
              <CocktailCard
                idDrink={cocktail.idDrink}
                strDrink={cocktail.strDrink}
                strDrinkThumb={cocktail.strDrinkThumb}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
