
import React from "react";
import style from "./DesktopCart.module.css";
import { useNavigate } from "react-router-dom";

export default function DesktopCart() {
  const navigate = useNavigate();
  return (
    <div className={style.container}>
      <div className={style.header}>
        <img src="/images/arrow-left.png" alt=""  />
        <h2>Your Order Details</h2>
      </div>

      <div className={style.info}>
        <div className={style.displayitem}>
          <h1>display cart content</h1>
        </div>
        <div className={style.Billdetail}>
          <div className={style.address} onClick={() => navigate("/addAddress")}>
            <img src="/images/MapPin.png" alt="" className={style.pin} />
            <div>
              <p>Delivery Address</p>
              <p>show selected adress</p>
            </div>
          </div>

          <hr />
          <p>items total 210</p>
          <p>sales tax 10</p>
          <hr />
          <p>total 300</p>
          <button className={style.paymentBtn} onClick={() => navigate("/payment")}>Choose Payment Method</button>
        </div>
   
      </div>
    </div>
  );
}
