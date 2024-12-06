import React from "react";
import "./Recipes.css";
import { categoryList } from "../assets/assets.js";

const Recipes = ({ category, setCategory }) => {
  return (
    <div className="recipes" id="recipes">
      <h3>recipes</h3>
      <div className="recipes-list">
        {categoryList.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.categoryName ? "All" : item.categoryName
                )
              }
              key={index}
              className="recipes-list-item"
            >
              <img
                className={category === item.categoryName ? "active" : ""}
                src={item.categoryImage}
                alt="food image"
              />
              <p>{item.categoryName}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default Recipes;
