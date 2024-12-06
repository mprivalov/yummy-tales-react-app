import React, { useContext } from "react";
import "./Bag.css";
import { StoreContext } from "../../context/StoreContext";

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
                  <p>x</p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Bag;
