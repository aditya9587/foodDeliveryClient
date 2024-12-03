import React from "react";
import style from "./Home.module.css";
import CartBar from "../../components/CartNavbar/CartBar";
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/HeroSection/HeroSection";
import Deals from "../../components/Deals/Deals";
import Category from "../../components/category/Category";
import Restaurant from "../../components/Restaurant/Restaurant";
import Banner from "../../components/Banner/Banner";
import InfoBanner from "../../components/infoBanner/InfoBanner";
import Aboutus from "../../components/Aboutus/Aboutus";
import FooterPanel from "../../components/Footer/FooterPanel";

export default function Home() {
  return (
    <>
      <div className={style.HomeContainer}>
        <CartBar />
        <Navbar />
        <HeroSection />
        <Deals />
        <Category />
        <Restaurant />
        <Banner />
        <InfoBanner />
        <Aboutus />
      </div>
      <FooterPanel />
    </>
  );
}
