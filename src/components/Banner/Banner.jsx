import React from "react";
import style from "./Banner.module.css";
import cld from "../../utils/ImageUtil";
import { AdvancedImage } from "@cloudinary/react";

export default function Banner() {
  return (
    <div className={style.container}>
      <AdvancedImage
        cldImg={cld.image("foodDelivery/couple")}
        className={style.coupleImg}
      />

      <div className={style.right}>
        <div className={style.logoContainer}>
          <img src="/images/LOGO1.png" alt="" className={style.logo} />
          <h1>ing is more </h1>
        </div>
        <div className={style.logoText}>
          <span className={style.startHeading}>Personalised</span>
          <h1 className={style.customHeading}>& Instant</h1>
        </div>

        <p>Download the Order.uk app for faster ordering</p>
        <img src="/images/storeLogo.png" alt="" className={style.storeLogo} />
      </div>
    </div>
  );
}
