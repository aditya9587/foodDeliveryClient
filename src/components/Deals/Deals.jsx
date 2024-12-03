import React from "react";
import style from "./Deals.module.css";
import cld from "../../utils/ImageUtil";
import { AdvancedImage } from "@cloudinary/react";

export default function Deals() {
  return (
    <div className={style.container}>
      <h2>Up to -40% 🎊 Order.uk exclusive deals</h2>
      <div className={style.dealImage}>
        <div className={style.deal}>
          <AdvancedImage cldImg={cld.image("foodDelivery/deal1")} />
          <div>
            <p className={style.discount}> -40% </p>
            <div className={style.dealtext}>
              <p className={style.category}>Restaurant</p>
              <p>Chef Burgers London</p>
            </div>
          </div>
        </div>
        <div className={style.deal}>
          <AdvancedImage cldImg={cld.image("foodDelivery/deal2")} />
          <div>
            <p className={style.discount}> -20% </p>
            <div className={style.dealtext}>
              <p className={style.category}>Restaurant</p>
              <p>Grand Ai Cafe London</p>
            </div>
          </div>
        </div>
        <div className={style.deal}>
          <AdvancedImage cldImg={cld.image("foodDelivery/deal1")} />
          <div>
            <p className={style.discount}> -17% </p>
            <div className={style.dealtext}>
              <p className={style.category}>Restaurant</p>
              <p>Grand Ai Cafe London</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
