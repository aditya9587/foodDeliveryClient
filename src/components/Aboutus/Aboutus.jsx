import React from "react";
import style from "./Aboutus.module.css";

export default function Aboutus() {
  return (
    <>
      <div className={style.container}>
        <div className={style.AboutusHeading}>
          <h2>Know more about us!</h2>
          <div className={style.insideAboutsHead}>
            <p>Frequent Questions </p>
            <p>Who we are?</p>
            <p>Partner Program</p>
            <p>Help & Support</p>
          </div>
        </div>

        <div className={style.subPart}>
          <div className={style.subPart1}>
            <p className={style.selectedText}>How does Order.UK work?</p>
            <p>What payment methods are accepted?</p>
            <p>Can I track my order in real-time?</p>
            <p>Are there any special discounts or promotions available?</p>
            <p>Is Order.UK available in my area?</p>
          </div>
          <div className={style.subPart2}>
            <div className={style.subPart2Content}>
              <div className={style.insideSubpartContent}>
                <h4>Place an Order!</h4>
                <img src="/images/order-food.png" alt="" />
                <p>Place order through our website or Mobile app</p>
              </div>
              <div className={style.insideSubpartContent}>
                <h4>Track Progress</h4>
                <img src="/images/food.png" alt="" />
                <p> Your can track your order status with delivery time</p>
              </div>
              <div className={style.insideSubpartContent}>
                <h4>Get your Order!</h4>
                <img src="/images/order.png" alt="" />
                <p>Receive your order at a lighting fast speed!</p>
              </div>
            </div>
            <p className={style.footerHeading}>
              Order.UK simplifies the food ordering process. Browse through our
              diverse menu, select your favorite dishes, and proceed to
              checkout. Your delicious meal will be on its way to your doorstep
              in no time!
            </p>
          </div>
        </div>
      </div>

      <div className={style.stats}>
        <p> <span> 546+ </span> <br /> Registered Riders</p>
        <p> <span>789,900+</span><br /> Orders Delivered</p>
        <p> <span>690+</span>  <br /> Restaurants Partnered</p>
        <p> <span> 17,457+</span> <br /> Food items</p>
      </div>
    </>
  );
}
