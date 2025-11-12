import React, { useState, useEffect, useContext } from "react";
import style from "./Basket.module.css";
import { getCart, removeItem } from "../../services/cart";
import { RestaurantContext } from "../../ContextApi/RestaurantContext";
import { useNavigate } from "react-router-dom";
import { generateShareableLink } from "../../services/cart";
import { toast } from "react-toastify";

export default function Basket() {
  const { cartItems, setCartItems, dbCartItems, setDbCartItems } =
    useContext(RestaurantContext);

  const [shareableLink, setShareableLink] = useState("");

  const handleShareCart = async () => {
    try {
      const { shareToken } = await generateShareableLink();
      const link = `${window.location.origin}/shared-cart/${shareToken}`;
      setShareableLink(link);

      // Copy to clipboard
      await navigator.clipboard.writeText(link);
      toast.success("Cart link copied to clipboard!");
    } catch (error) {
      console.error("Error generating shareable link:", error);
      toast.error("Failed to generate shareable link");
    }
  };

  const navigate = useNavigate();
  const fetchCartItems = async () => {
    try {
      const data = await getCart();
      setCartItems(data.data.cart);
    } catch (error) {
      console.log("Error in fetching cart items", error);
    }
  };
  useEffect(() => {
    fetchCartItems();
  }, []);

  const handleRemoveItem = async (itemId) => {
    try {
      const response = await removeItem({ productId: itemId });

      if (response.status === 200) {
        // Update local state only after successful backend removal
        setCartItems(cartItems.filter((item) => item.id !== itemId));
        fetchCartItems();
      } else {
        console.error("Failed to remove item:", response.data.error);
        // Optionally show error to user via toast/alert
      }
    } catch (error) {
      console.error("Error removing item from cart:", error);
      // Handle error appropriately
    }
  };
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
      <div className={style.share}>
        <img src="/images/share-2.png" alt="" className={style.shareIcon} />
        <p className={style.shareText}>
          Share this cart <br />
          with your friends
        </p>
        <button className={style.copyLink} onClick={handleShareCart}>
          Copy Link
        </button>
      </div>
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
              onClick={() => handleRemoveItem(item.productId)}
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
          <p className={style.totalPrice}>₹ {calculateTotal().toFixed(2)}</p>
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
            <button
              className={style.checkoutButton}
              onClick={() => navigate("/checkout")}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
