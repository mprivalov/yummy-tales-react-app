import React, { useContext } from "react";
import "./Bag.css";
import { StoreContext } from "../../context/StoreContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Bag = () => {
  const { bagItems, recipes_list, removeFromBag } = useContext(StoreContext);
  
  return (
    <div className="bag">
      <div className="bag-items">
        <div className="bag-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Quantity</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {recipes_list.map((item, index) => {
          if (bagItems[item.id] > 0) {
            return (
              <div>
                <div className="bag-items-title bag-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{bagItems[item.id]}</p>
                  <FontAwesomeIcon
                    onClick={() => removeFromBag(item.id - 1)}
                    className="bag-items-remove"
                    icon={faXmark}
                  />
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="bag-bottom">
        <p>
          *If you put everything you want in the bag, click on the button below!
        </p>
        <button>proceed to checkout</button>
      </div>
    </div>
  );
};

export default Bag;
