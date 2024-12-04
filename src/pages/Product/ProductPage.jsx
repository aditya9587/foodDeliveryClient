import React from "react";
import style from "./ProductPage.module.css";
import CartBar from "../../components/CartNavbar/CartBar";
import Navbar from "../../components/Navbar/Navbar";
import ResBanner from "../../components/RestaurantBanner/ResBanner";
import RestaurantItems from "../../components/RestaurantItems/RestaurantItems";
import Review from "../../components/Review/Review";
import Restaurant from "../../components/Restaurant/Restaurant";
import FooterPanel from "../../components/Footer/FooterPanel";
import MapComponent from "../../components/RestaurantMap/MapComponent";


export default function ProductPage() {
  return (
    <>
      <div className={style.container}>
        <CartBar />
        <Navbar />
        <ResBanner />
        <RestaurantItems />
        <Review />
        <MapComponent />
        <Restaurant />
      </div>
      <FooterPanel />
    </>
  );
}
