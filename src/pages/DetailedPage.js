import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const axios = require("axios");

export default function DetailedPage() {
  const route_parameters = useParams();
  const id = route_parameters.id;
  //   console.log(id);

  const [cocktailData, set_cocktailData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      set_cocktailData(res.data.drinks);
    }
    fetchData();
  }, [id]);

  console.log(cocktailData);
  //this is an object, so to access the data, you need to map them?

  return (
    <div>
      {cocktailData.map((cocktail) => {
        return (
          <img
            key={cocktail.idDrink}
            src={cocktail.strDrinkThumb}
            alt={cocktail.strDrink}
            style={{ float: "left", width: 300 }}
            className="mb-3 ml-5 mr-5"
          />
        );
      })}
      {cocktailData.map((cocktail) => {
        return (
          <h2 key={cocktail.idDrink} className="mt-5">
            {cocktail.strDrink}
          </h2>
        );
      })}
      <p className="text-secondary text-left">Cocktail category:</p>
      {cocktailData.map((cocktail) => {
        return (
          <p className="text-left ml-4" key={cocktail.idDrink}>
            {cocktail.strCategory}
          </p>
        );
      })}
      <p className="text-secondary text-left">Alcohol:</p>
      {cocktailData.map((cocktail) => {
        return (
          <p className="text-left ml-4" key={cocktail.idDrink}>
            {cocktail.strAlcoholic}
          </p>
        );
      })}
      <p className="text-secondary text-left">How to make:</p>
      {cocktailData.map((cocktail) => {
        return (
          <p className="text-left ml-4" key={cocktail.idDrink}>
            {cocktail.strInstructions}
          </p>
        );
      })}
    </div>
  );
}