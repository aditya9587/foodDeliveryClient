import React,{ useContext} from "react";
import style from "./CartBar.module.css";
import { RestaurantContext } from "../../ContextApi/RestaurantContext";

export default function CartBar() {
  const { showCart, setShowCart } = useContext(RestaurantContext);
  const showCartHandler = () => {
    setShowCart(!showCart);
  }
  return (
    <div className={style.container}>
      <>
      <p>
        Get 5% Off your first order,
        <span className={style.promo}> Promo: ORDER5 </span>
      </p>
      </>
      
      <div className={style.nav}>
        <img src="/images/Location.png" alt="" />
        <p>Regent Street, A4, A4201, London</p>
        <span className={style.promo}>Change Location</span>
      </div>

      <div className={style.cartDiv}>
        <div className={style.insideCart} onClick={showCartHandler}>
          <img src="/images/cart.png" alt="" />
          <p>My Cart</p>
        </div>

        <img src="/images/cartButton.png" alt="" className={style.cartButton} />
      </div>
    </div>
  );
}
