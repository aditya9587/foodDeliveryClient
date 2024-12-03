import React, { createContext, useEffect, useState } from "react";

export const RestaurantContext = createContext();

export const RestaurantProvider = ({ children }) => {
  const [restaurantName, setRestaurantName] = useState(() => {
    return localStorage.getItem("restaurantName") || "McDonald's";
  });

  const [name, setName] = useState(() => {
    return localStorage.getItem("name") || "Login/Signup";
  });

  // const [dbCartItems, setDbCartItems] = useState([]);

  const [cartItems, setCartItems] = useState([]);


  const [showCart, setShowCart] = useState(false);

  

  useEffect(() => {
    localStorage.setItem("restaurantName", restaurantName);
  }, [restaurantName]);

  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  return (
    <RestaurantContext.Provider
      value={{
        restaurantName,
        setRestaurantName,
        name,
        setName,
        showCart,
        setShowCart,
        cartItems,
         setCartItems
        // cardDetails , 
        // setCardDetails
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};


