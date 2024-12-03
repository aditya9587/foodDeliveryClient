import React from "react";
import style from "./FooterPanel.module.css";

export default function FooterPanel() {
  return (
    <>
      <div className={style.container}>
        <div className={style.ftrSec1}>
          <img src="/images/LOGO2.png" alt="" className={style.ftrImg1} />
          <img src="/images/storeLogo.png" alt="" className={style.ftrImg2} />
          <p>Company # 490039-445, Registered with House of companies.</p>
        </div>

        <div className={style.ftrSec2}>
          <p className={style.ftrSecHeading}>
            Get Exclusive Deals in your Inbox
          </p>
          <div className={style.ftrSecInput}>
            <input type="text" placeholder="youremail@gmail.com" />
            <button>Subscribe</button>
          </div>
          <p>we wont spam, read our email policy</p>
          <div className={style.iconDiv}>
            <img src="/images/Snapchat.png" alt="" className={style.icon} />
            <img src="/images/Instagram.png" alt="" className={style.icon} />
            <img src="/images/Facebook.png" alt="" className={style.icon} />
            <img src="/images/TikTok.png" alt="" className={style.icon} />
          </div>
        </div>

        <div className={style.ftrSec3}>
          <h4 className={style.ftrSecHeading}>Legal Pages</h4>
          <p>Terms and conditions</p>
          <p>Privacy</p>
          <p>Cookies</p>
          <p>Modern Slavery Statement</p>
        </div>

        <div className={style.ftrSec3}>
          <h4 className={style.ftrSecHeading}>Important Links</h4>
          <p>Get help</p>
          <p>Add your restaurant</p>
          <p>Sign up to deliver</p>
          <p>Create a business account</p>
        </div>

      </div>

      <div className={style.ftrBar}>
        <p>Order.uk Copyright 2024, All Rights Reserved.</p>
        <div className={style.ftrBarInside}>
          <p>Privacy Policy</p>
          <p> Terms</p>
          <p>Pricing</p>
          <p>Do not sell or share my personal information</p>
        </div>
        
      </div>
    </>
  );
}
