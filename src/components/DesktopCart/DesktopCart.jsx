import React, { useContext, useEffect } from "react";
import style from "./DesktopCart.module.css";
import { useNavigate } from "react-router-dom";
import { RestaurantContext } from "../../ContextApi/RestaurantContext";
import { getCart } from "../../services/cart";

export default function DesktopCart() {
  const navigate = useNavigate();
  const { cartItems, setCartItems, total, setTotal } = useContext(RestaurantContext);

  const itemsTotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const salesTax = itemsTotal * 0.05; // Example: 5% tax
 
  useEffect(() => {
    setTotal(itemsTotal + salesTax);
  }, [itemsTotal, salesTax]);

  const selectedAddress = "123 Main Street, Springfield"; // Replace with actual state/prop data

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await getCart();
        const data = response.data.cart;
        setCartItems(data);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, [setCartItems]);

  return (
    <div className={style.container}>
      <div className={style.header}>
        <img
          src="/images/arrow-left.png"
          alt="Go Back"
          onClick={() => navigate(-1)}
          style={{ cursor: "pointer" }}
        />
        <h1>Your Order Details</h1>
      </div>

      <div className={style.info}>
        <div className={style.displayitem}>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div className={style.item} key={index}>
                <div className={style.itemInfo}>
                  <img
                    src="/images/MacMeal.png"
                    alt=""
                    className={style.itemImage}
                  />
                  <div>
                    <p className={style.itemName}>{item.itemName}</p>
                    <p className={style.itemQuantity}>{item.quantity}x item</p>
                  </div>

                  <p className={style.itemPrice}>{item.price.toFixed(2)}</p>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty. Start adding items!</p>
          )}
          <input
            type="text"
            placeholder="Add order Notes"
            className={style.orderNotes}
          />
        </div>

        <div className={style.Billdetail}>
          <div
            className={style.address}
            onClick={() => navigate("/addAddress")}
            style={{ cursor: "pointer" }}
          >
            <img
              src="/images/MapPin.png"
              alt="Delivery Address Icon"
              className={style.pin}
            />
            <div>
              <p>Delivery Address</p>
              <p>{selectedAddress || "No address selected yet"}</p>
            </div>
          </div>

          <hr />
          <div className={style.total}>
            <div className={style.totalText}>
              <p>Items Total: </p>
              <p>Sales Tax: </p>
              <hr />
              <p>Total: </p>
            </div>

            <div className={style.totalAmount}>
              <span className={style.itemsTotal}>{itemsTotal.toFixed(2)} </span>
              <span>{salesTax.toFixed(2)}</span>
              <hr />
              <span>{total.toFixed(2)}</span>
            </div>
          </div>
          <button
            className={style.paymentBtn}
            onClick={() => navigate("/payment")}
          >
            Choose Payment Method
          </button>
        </div>
      </div>
    </div>
  );
}
