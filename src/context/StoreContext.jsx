import { createContext, useState } from "react";
import { recipes_list } from "../assets/assets.js";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [bagItems, setBagItems] = useState({});

  const addToBag = (itemId) => {
    setBagItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromBag = (itemId) => {
    setBagItems((prev) => {
      const currentCount = prev[itemId];
      if (currentCount === 1) {
        const { [itemId]: _, ...newBagItems } = prev;
        return newBagItems;
      }
      return { ...prev, [itemId]: currentCount - 1 };
    });
  };

  const contextValue = {
    recipes_list,
    bagItems,
    setBagItems,
    addToBag,
    removeFromBag,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
