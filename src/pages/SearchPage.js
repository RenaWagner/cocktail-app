import React, { useState } from "react";
import SearchedCocktailCard from "../components/SearchedCocktailCard";

const axios = require("axios");

export default function SearchPage() {
  const [searchText, set_searchText] = useState("");
  const [cocktailData, set_cocktailData] = useState([]);

  const search = async () => {
    // console.log("fetching data:", searchText);
    const res = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`
    );
    set_cocktailData(res.data.drinks);
    // console.log("done fetching");

    set_searchText("");
  };

  console.log("fetchedData", cocktailData);

  return (
    <div>
      <p className="mt-5">Search cocktails by putting the name:</p>
      <input
        type="text"
        className="mt-2"
        value={searchText}
        onChange={(event) => set_searchText(event.target.value)}
      />
      <button onClick={search}>Search</button>
      {cocktailData == null ? (
        <p>Cannot find data</p>
      ) : (
        <div className="d-flex flex-wrap justify-content-center">
          {cocktailData.map((cocktail) => {
            return (
              <SearchedCocktailCard
                key={cocktail.idDrink}
                id={cocktail.idDrink}
                name={cocktail.strDrink}
                img={cocktail.strDrinkThumb}
                category={cocktail.strCategory}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
