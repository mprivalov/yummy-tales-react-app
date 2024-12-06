import React, { useContext } from "react";
import "./RecipesItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { StoreContext } from "../../context/StoreContext";

const RecipesItem = ({ id, name, image, description }) => {
  const { bagItems, addToBag, removeFromBag } = useContext(StoreContext);

  return (
    <div className="recipes-item">
      <div className="recipes-item-img-container">
        <img
          className="recipes-item-img"
          src={image}
          alt={name || "Recipe image"}
        />
        {!bagItems[id] ? (
          <FontAwesomeIcon
            onClick={() => addToBag(id)}
            className="add-to-cart"
            icon={faCartPlus}
          />
        ) : (
          <div className="recipes-item-counter">
            <FontAwesomeIcon
              onClick={() => addToBag(id)}
              className="add"
              icon={faPlus}
            />
            <p className="item-count">{bagItems[id]}</p>
            <FontAwesomeIcon
              onClick={() => removeFromBag(id)}
              className="substract"
              icon={faMinus}
            />
          </div>
        )}
      </div>
      <div className="recipes-item-info">
        <p className="recipes-item-name">{name}</p>
        <p className="recipes-item-desc">{description}</p>
      </div>
    </div>
  );
};

export default RecipesItem;
