import React from "react";
import style from "./Payments.module.css";
import CartBar from "../../components/CartNavbar/CartBar";
import Navbar from "../../components/Navbar/Navbar";
import FooterPanel from "../../components/Footer/FooterPanel";
import PaymentOption from "../../components/PaymentOption/PaymentOption";

export default function Payments() {
  return (
    <>
      <div className={style.container}>
        <CartBar />
          <Navbar />
        <PaymentOption />
      </div>
      <div className={style.footer}>
        <FooterPanel />
      </div>
    </>
  );
}
