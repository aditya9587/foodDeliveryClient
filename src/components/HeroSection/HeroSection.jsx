import React from "react";
import cld from "../../utils/ImageUtil";
import { AdvancedImage } from "@cloudinary/react";
import style from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <div className={style.container}>
      <div className={style.insideContainer1}>
        <p>Order Restaurant food, takeaway and groceries.</p>
        <h1>
          Feast Your Senses,
          <br /> <span className={style.headingSpan}>Fast and Fresh</span>
        </h1>
        <p>Enter a postcode to see what we deliver</p>
        <div className={style.search}>
          <input type="text" placeholder="e.g. EC4R 3TE" />
          <button>search</button>
        </div>
      </div>

      <div className={`${style.insideContainer2} ${style.curvedBackground}`}>
      <AdvancedImage
        cldImg={cld.image("foodDelivery/heroImage1")}
        className={style.heroImage1}
      />
      <AdvancedImage cldImg={cld.image("foodDelivery/heroImage2")}  className={style.heroImage2}/>
      </div>

      <div className={style.notification}>
        <img src="/images/LOGO1.png" alt="logo" className={style.notificationImg}/>
        <p>We’ve Received your order!</p>
        <p>Awaiting Restaurant acceptance </p>
      </div>

      <div className={style.notification2}>
        <img src="/images/LOGO1.png" alt="logo" className={style.notificationImg} />
        <p>Order Accepted! </p>
        <p>Your order will be delivered shortly</p>
      </div>

      <div className={style.notification3}>
        <img src="/images/LOGO1.png" alt="logo" className={style.notificationImg}/>
        <p>Your Rider,s nearby </p>
        <p>They're almost there - get ready! </p>
      </div>
    </div>
  );
}
