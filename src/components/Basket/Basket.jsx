import React, { useState, useEffect, useContext } from "react";
import style from "./Basket.module.css";
import { getCart } from "../../services/cart";
import { RestaurantContext } from "../../ContextApi/RestaurantContext";
import { useNavigate } from "react-router-dom";

export default function Basket() {

  const { cartItems, setCartItems } = useContext(RestaurantContext);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const data = await getCart();
        setCartItems(data.data.cart);
      } catch (error) {
        console.log("Error in fetching cart items", error);
      }
    };
    fetchCartItems();
  }, []);

  

  const removeItemFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const calculateTotal = () => {
    return calculateSubtotal();
  };

  return (
    <div className={style.container}>
      <div className={style.cartNavbar}>
        <img src="/images/cart.png" alt="" className={style.cart} />
        <p>My Basket</p>
      </div>
      <div className={style.cartItems}>
        {cartItems.map((item) => (
          <div key={item.id} className={style.cartItem}>
            <p className={style.quantity}>{item.quantity}X</p>
            <div className={style.itemType}>
              <p className={style.price}>₹ {item.price.toFixed(2)}</p>
              <p>{item.itemName}</p>
            </div>

            <img
              src="/images/Remove.png"
              alt=""
              onClick={() => removeItemFromCart(item.id)}
              className={style.remove}
            />
          </div>
        ))}
      </div>

      <div className={style.summary}>
        <div>
          <p>Subtotal:</p>
          <p>Delivery fee:</p>
          <p>Discount:</p>
        </div>
        <div className={style.values}>
          <p>-₹ 10</p>
          <p> ₹ 10</p>
        </div>
      </div>
      <div className={style.total}>
        <div className={style.Totalpay}>
          <p>Total to Pay:</p>
          <p>₹ {calculateTotal().toFixed(2)}</p>
        </div>

        <div className={style.insideTotal}>
          <input
            type="text"
            placeholder="Choose Free Item"
            className={style.payInput}
          />
          <img
            src="/images/downBTN.png"
            alt="Dropdown"
            className={style.directions}
          />
        </div>
        <div className={style.insideTotal}>
          <input
            type="text"
            placeholder="Apply Coupon Code here"
            className={style.payInput}
          />
          <img
            src="/images/FwdBTN.png"
            alt="FwdBTN"
            className={style.directions}
          />
        </div>
        <hr />
        <div className={style.checkout}>
          <div className={style.insideCheckout}>
            <div className={style.delivery}>
              <img src="/images/Delivery.png" alt="" />
              <p className={style.highlight}>Delivery</p>
              <p>Starts at 17:50</p>
            </div>
            <div className={style.delivery}>
              <img src="/images/Store.png" alt="" />
              <p className={style.highlight}>Collection</p>
              <p>Starts at 16:50</p>
            </div>
          </div>

          <div className={style.checkoutBTN}>
            <img
              src="/images/checkBTN.png"
              alt=""
              className={style.checkoutImg}
            />
            <button className={style.checkoutButton} onClick={() => navigate("/checkout")}>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
