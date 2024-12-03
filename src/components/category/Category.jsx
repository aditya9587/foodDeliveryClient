import React from "react";
import style from "./Category.module.css";
import cld from "../../utils/ImageUtil";
import { AdvancedImage } from "@cloudinary/react";

export default function Category() {
  return (
    <div className={style.container}>
      <h2>Order.uk Popular Categories 🤩</h2>
      <div className={style.insideContainer}>
        <div className={style.dishes}>
          <AdvancedImage cldImg={cld.image("foodDelivery/dish1")} />
          <div className={style.dishDesc}>
            <p className={style.dishHeading}>Burgers & Fast food</p>
            <p className={style.restaurant}>21 restaurants</p>
          </div>
        </div>
        <div className={style.dishes}>
          <AdvancedImage cldImg={cld.image("foodDelivery/dish2")} />
          <div className={style.dishDesc}>
            <p className={style.dishHeading}>Salads</p>
            <p className={style.restaurant}>36 restaurants</p>
          </div>
        </div>
        <div className={style.dishes}>
          {" "}
          <AdvancedImage cldImg={cld.image("foodDelivery/dish3")} />
          <div className={style.dishDesc}>
            <p className={style.dishHeading}>Pasta & Casuals</p>
            <p className={style.restaurant}>42 restaurants</p>
          </div>
        </div>
        <div className={style.dishes}>
          {" "}
          <AdvancedImage cldImg={cld.image("foodDelivery/dish4")} />
          <div className={style.dishDesc}>
            <p className={style.dishHeading}>Pizza</p>
            <p className={style.restaurant}>54 restaurants</p>
          </div>
        </div>
        <div className={style.dishes}>
          {" "}
          <AdvancedImage cldImg={cld.image("foodDelivery/dish5")} />
          <div className={style.dishDesc}>
            <p className={style.dishHeading}>Breakfast</p>
            <p className={style.restaurant}>16 restaurants</p>
          </div>
        </div>
        <div className={style.dishes}>
          <AdvancedImage cldImg={cld.image("foodDelivery/dish6")} />
          <div className={style.dishDesc}>
            <p className={style.dishHeading}>Soups</p>
            <p className={style.restaurant}>35 restaurants</p>
          </div>
        </div>
      </div>
    </div>
  );
}
