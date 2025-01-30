import React, { useContext } from "react";
import "./Bag.css";
import { StoreContext } from "../../context/StoreContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Bag = () => {
  const { bagItems, recipes_list, removeFromBag } = useContext(StoreContext);

  const navigate = useNavigate();

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
              <div key={item.id}>
                <div className="bag-items-title bag-items-item">
                  <img src={item.image} alt={item.name} />
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
        {Object.values(bagItems).every((count) => count > 0) ? (
          <>
            <p>
              *If you put everything you want in the bag, click on the button
              below!
            </p>
            <button onClick={() => navigate("/order")}>
              proceed to checkout
            </button>
          </>
        ) : <p>your cart is empty, please put something to proceed your order.</p>}
      </div>
    </div>
  );
};

export default Bag;
