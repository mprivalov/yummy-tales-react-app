import React, { useContext } from "react";
import "./RecipesDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import RecipesItem from "../RecipesItem/RecipesItem";

const RecipesDisplay = ({ category }) => {
  const { recipes_list } = useContext(StoreContext);

  return (
    <div className="recipes-display" id="recipes-display">
      <h4>best recipes in that category</h4>
      <div className="recipes-display-list">
        {recipes_list.map((item, index) => {
          if ((category === "All" || category === item.category)) {
            return (
              <RecipesItem
                key={index}
                id={item.id}
                name={item.name}
                image={item.image}
                description={item.description}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default RecipesDisplay;
