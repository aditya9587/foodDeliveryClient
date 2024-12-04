import React, { useState, useContext } from "react";
import style from "./PaymentOption.module.css";
import { RestaurantContext } from "../../ContextApi/RestaurantContext";
import { useNavigate } from "react-router-dom";

export default function PaymentOption() {
  const [displayDone, setDisplayDone] = useState(false);

  const { total }= useContext(RestaurantContext);

  const navigate = useNavigate();
  return (
    <div className={style.container}>
      {displayDone ? (
        <div className={style.parent}>
          <div className={style.orderPlace}>
            <img src="/images/done.png" alt="Order Successful" />
            <h4>Order Placed Successfully</h4>
            <p>
              Your order is confirmed and on its way. Get set to savor your
              chosen delights!
            </p>
            <div className={style.cartItems}>
              <button
                className={style.checkoutBtn}
                onClick={() => {
                  setDisplayDone(false);
                  navigate("/home");
                }} 

              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className={style.header}>
            <img src="/images/arrow-left.png" alt="Go Back" />
            <h2>Choose and Pay</h2>
          </div>

          <div className={style.content}>
            <div className={style.PaymentOption}>
              <div className={style.payment}>
                <img src="/images/Wallet.png" alt="Wallet" />
                <h5>Wallet</h5>
              </div>
              <hr />
              <div className={style.payment}>
                <img src="/images/Social.png" alt="MaestroKard" />
                <p>MaestroKard</p>
              </div>
              <div className={style.payment}>
                <img src="/images/Social2.png" alt="Paypal" />
                <p>Paypal</p>
              </div>
              <div className={style.payment}>
                <img src="/images/Social3.png" alt="Stripe" />
                <p>Stripe</p>
              </div>
              <div className={style.payment}>
                <img src="/images/AddDebit.png" alt="Add Debit Card" />
                <p>Add Debit Card</p>
              </div>
            </div>

            <div className={style.checkout}>
              <div className={style.Display}>
                <h4>Amount to be paid</h4>
                <p>{total}</p>
              </div>
              <hr />
              <button
                className={style.checkoutBtn}
                onClick={() => setDisplayDone(true)} 
              >
                Proceed Payment
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
