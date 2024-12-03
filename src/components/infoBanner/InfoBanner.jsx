import React from "react";
import style from "./InfoBanner.module.css";
import cld from "../../utils/ImageUtil";
import { AdvancedImage } from "@cloudinary/react";

export default function InfoBanner() {
  return (
    <div className={style.container}>
      <div className={style.inside}>
        <AdvancedImage
          cldImg={cld.image("foodDelivery/chef")}
          className={style.bannerImg}
        />
        <p className={style.bannerText}>Earn more with lower fees</p>
        <div className={style.textInfo}>
          <p>Signup as a business</p>
          <h2>Partner with us</h2>
          <button>Get Started</button>
        </div>
      </div>
      <div className={style.inside}>
        <AdvancedImage
          cldImg={cld.image("foodDelivery/Rider")}
          className={style.bannerImg}
        />
         <p className={style.bannerText}>Avail exclusive perks</p>
        <div className={style.textInfo}>
          <p>Signup as a rider</p>
          <h2>Ride with us</h2>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
}
