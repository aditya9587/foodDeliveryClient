import React from "react";
import style from "./Checkout.module.css";
import CartBar from "../../components/CartNavbar/CartBar";
import Navbar from "../../components/Navbar/Navbar";
import Restaurant from "../../components/Restaurant/Restaurant";
import FooterPanel from "../../components/Footer/FooterPanel";
import DesktopCart from "../../components/DesktopCart/DesktopCart";

export default function Checkout() {
  return (
    <>
      <div className={style.container}>
        <CartBar />
        <Navbar />
        <DesktopCart />
        <div className={style.hideInMObile}>
          <Restaurant />
        </div>
      </div>
      <div className={style.hideInMObile}>
        <FooterPanel />
      </div>
    </>
  );
}
