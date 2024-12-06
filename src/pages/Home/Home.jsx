import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header.jsx";
import Recipes from "../../components/Recipes.jsx";
import About from "../../components/About.jsx";
import RecipesDisplay from "../../components/RecipesDisplay/RecipesDisplay.jsx";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <About />
      <Recipes category={category} setCategory={setCategory} />
      <RecipesDisplay category={category} />
    </div>
  );
};

export default Home;
