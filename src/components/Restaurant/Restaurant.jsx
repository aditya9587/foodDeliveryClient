import React, { useContext } from "react";
import style from "./Restaurant.module.css";
import cld from "../../utils/ImageUtil";
import { AdvancedImage } from "@cloudinary/react";
import { useNavigate } from "react-router-dom";
import { RestaurantContext } from "../../ContextApi/RestaurantContext";

export default function Restaurant() {
  const navigate = useNavigate();

  const { setRestaurantName } = useContext(RestaurantContext);

  const handleRestaurantClick = (name) => {
    setRestaurantName(name);
    navigate("/products");
  };

  return (
    <div className={style.container}>
      <h1>Popular Restaurants</h1>
      <div className={style.insideContainer}>
        <div
          className={style.RestaurantChain}
          onClick={() => handleRestaurantClick("McDonald's")}
        >
          <AdvancedImage cldImg={cld.image("foodDelivery/Macd")} />
          <p>McDonald’s London </p>
        </div>
        <div
          className={style.RestaurantChain}
          onClick={() => handleRestaurantClick("PaPa John")}
        >
          <AdvancedImage cldImg={cld.image("foodDelivery/PapaJohn")} />
          <p>Papa Johns</p>
        </div>
        <div
          className={style.RestaurantChain}
          onClick={() => handleRestaurantClick("KFC")}
        >
          <AdvancedImage cldImg={cld.image("foodDelivery/KFC")} />
          <p>KFC West London</p>
        </div>
        <div
          className={style.RestaurantChain}
          onClick={() => handleRestaurantClick("Texas Chicken")}
        >
          <AdvancedImage cldImg={cld.image("foodDelivery/Texas")} />
          <p>Texas Chicken</p>
        </div>
        <div
          className={style.RestaurantChain}
          onClick={() => handleRestaurantClick("Burger King")}
        >
          <AdvancedImage cldImg={cld.image("foodDelivery/BurgerKing")} />
          <p>Burger King</p>
        </div>
        <div
          className={style.RestaurantChain}
          onClick={() => handleRestaurantClick("Shaurma")}
        >
          <AdvancedImage cldImg={cld.image("foodDelivery/Shaurma")} />
          <p>Shaurma 1</p>
        </div>
      </div>
    </div>
  );
}
