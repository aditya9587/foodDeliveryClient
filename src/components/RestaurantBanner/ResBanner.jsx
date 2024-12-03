import React, {useContext} from "react";
import style from "./ResBanner.module.css";
import cld from "../../utils/ImageUtil";
import { AdvancedImage } from "@cloudinary/react";
import { RestaurantContext } from "../../ContextApi/RestaurantContext";

export default function ResBanner() {

  const { restaurantName } = useContext(RestaurantContext);

  return (
    <div className={style.container}>
      <div className={style.containerInside1}>
        <p>I'm lovin' it!</p>
        <h1>{restaurantName} India</h1>
        <div className={style.infoDiv}>
          <div className={style.infoDiv1}>
            <img src="/images/complete.png" alt="" />
            <p>Minimum Order: 200 RS</p>
          </div>
          <div className={style.infoDiv1}>
            <img src="/images/Moto.png" alt="" />
            <p>Delivery in 20-25 Minutes</p>
          </div>
        </div>
      </div>

      <div className={style.conatinerInside2}>
        <AdvancedImage cldImg={cld.image("foodDelivery/BannerLogo")} className={style.LogoImage} />
        <AdvancedImage cldImg={cld.image("foodDelivery/Review")}  className={style.review}/>
      </div>

      <div className={style.outsideContainer}>
        <img src="/images/Clock.png" alt="" />
        <p>Open until 3:00 AM</p>
      </div>
    </div>
  );
}
