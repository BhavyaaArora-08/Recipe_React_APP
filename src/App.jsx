import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";

const App = () => {
  const APP_ID = "6691a689";
  const APP_KEY = "98072337c1b532b2f8bbc175e808c34c";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
      console.log("i am called search: " + search + " query: " + query);
    };
    getRecipes();
  }, [query]);

  return (
    <div style={{ textAlign: "center", padding: "10px" }}>
      <form>
        <input
          value={search}
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
            // console.log(search);
          }}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setQuery(search);
            console.log(query);
            // setSearch("");
          }}
        >
          Search
        </button>
      </form>
      <div>
        {recipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            name={recipe.recipe.label}
            cals={recipe.recipe.calories}
            img={recipe.recipe.image}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

// ingr={recipe.recipe.ingredients}
