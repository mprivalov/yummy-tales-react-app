import { createContext, useEffect, useState } from "react";
import { recipes_list } from "../assets/assets.js";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
//   const [bagItems, setBagItems] = useState({});

//   const addToBag = (itemId) => {
//     if (!bagItems[itemId]) {
//       setBagItems((prev) => ({ ...prev, [itemId]: 1 }));
//     } else {
//       setBagItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//     }
//   };

//   const removeFromBag = (itemId) => {
//     setBagItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
//   };

  const [bagItems, setBagItems] = useState({});

  const addToBag = (itemId) => {
    setBagItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1, // Увеличиваем количество на 1
    }));
  };

  const removeFromBag = (itemId) => {
    setBagItems((prev) => {
      const currentCount = prev[itemId];
      // Проверяем, не меньше ли 1
      if (currentCount === 1) {
        // Если счетчик равен 1, удаляем элемент
        const { [itemId]: _, ...newBagItems } = prev; // Используем деструктуризацию для удаления
        return newBagItems;
      }
      // Иначе просто уменьшаем
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
