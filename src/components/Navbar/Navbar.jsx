import React, { useEffect, useState , useContext } from "react";
import style from "./Navbar.module.css";
import { useMediaQuery } from "react-responsive";
import { RestaurantContext } from "../../ContextApi/RestaurantContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const isMobile = useMediaQuery({ query: "(max-width: 426px)" });
  const { name, setName } = useContext(RestaurantContext);

  const navigate = useNavigate();

  useEffect(() => {
    const userName = localStorage.getItem("username");
    if (userName) {
      setName(userName);
    }
  }, []);


  return (
    <>
      {isMobile ? (
        <div className={style.mobile}>
          <div className={style.mobilePart1}>
            <img src="/images/LOGO1.png" alt="" className={style.part1Img1} />
            <img src="/images/Menu.png" alt="" className={style.part1Img2} />
          </div>

          <div className={style.mobilePart2}>
            <div className={style.mobilePart2A} onClick={() => navigate("/profile")} >
              <img src="/images/profile.png" alt="" />
              <p >Hey {name}</p>
            </div>
            <div className={style.mobilePart2B}>
              <img src="/images/cart.png" alt="" />
              <p>My Cart</p>
            </div>
          </div>

          <div className={style.location}>
            <img src="/images/Location.png" alt="" />
            <p>Lution Street, N4G-00....</p>
          </div>
        </div>
      ) : (
        <div className={style.conatiner}>
          <>
            <>
              <img src="/images/LOGO1.png" alt="" className={style.logoImg} />
            </>

            <div className={style.insideContainer}>
              <p>Home </p>
              <p> Browse Menu</p>
              <p> Special Offers</p>
              <p>Restaurants</p>
              <p>Track Order</p>
            </div>

            <div className={style.loginbtndiv} onClick={() => navigate("/profile")} >
              <img src="/images/user.png" alt="" />
              <p>{name}</p>
            </div>
          </>
        </div>
      )}
    </>
  );
}
