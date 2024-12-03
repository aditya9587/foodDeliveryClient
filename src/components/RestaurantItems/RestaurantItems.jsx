import React, { useState, useEffect, useContext } from "react";
import style from "./RestaurantItems.module.css";
import { useNavigate } from "react-router-dom";
import cld from "../../utils/ImageUtil";
import { AdvancedImage } from "@cloudinary/react";
import Basket from "../Basket/Basket";
import { RestaurantContext } from "../../ContextApi/RestaurantContext";
import { addtocart, getCart } from "../../services/cart";

export default function RestaurantItems() {
  //show cart items
  const { showCart, cartItems, setCartItems } = useContext(RestaurantContext);

  const [dbCartItems, setDbCartItems] = useState([]);

  const navigate = useNavigate();
  // State to manage cart items in database

  // Enhanced addItemToCart function with proper error handling
  const addItemToCart = async (item) => {
    try {
      if (!item || !item.productId) {
        throw new Error("Invalid item data");
      }

      const existingItem = dbCartItems.find(
        (cartItem) => cartItem.productId === item.productId
      );

      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };

        const response = await addtocart(updatedItem);

        if (response && response.success) {
          setDbCartItems(
            dbCartItems.map((cartItem) =>
              cartItem.productId === item.productId ? updatedItem : cartItem
            )
          );

          // const cartResponse = await getCart();
          // if (cartResponse && cartResponse.success) {
          //   setCartItems(cartResponse.data.data);
          // } else {
          //   console.error("Failed to fetch cart items", cartResponse);
          // }
        } else {
          console.error("Failed to update item quantity", response);
        }
      } else {
        const newItem = { ...item, quantity: 1 };
        const response = await addtocart(newItem);

        if (response && response.success) {
          setDbCartItems([...dbCartItems, newItem]);
        } else {
          console.error("Failed to add item to cart", response);
        }
      }
    } catch (error) {
      console.error("Error managing cart item:", error);
    }
  };

  const burgers = [
    {
      productId: 1,
      itemName: "Royal Cheese Burger with extra Fries",
      desc: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
      price: 120,
      img: "foodDelivery/meal1",
    },
    {
      productId: 2,
      itemName: "Happy meal",
      desc: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
      price: 120,
      img: "foodDelivery/meal1",
    },
    {
      productId: 3,
      itemName: "Minions Happy meal",
      desc: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
      price: 120,
      img: "foodDelivery/meal1",
    },
    {
      productId: 4,
      itemName: "jumbo meal",
      desc: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
      price: 120,
      img: "foodDelivery/meal2",
    },
  ];

  const fries = [
    {
      productId: 5,
      itemName: "Normal Fries",
      desc: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
      price: 70,
      img: "foodDelivery/fries1",
    },
    {
      productId: 6,
      itemName: "Peri peri Fries",
      desc: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
      price: 70,
      img: "foodDelivery/fries2",
    },
    {
      productId: 7,
      itemName: "Cheesy Fries",
      desc: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
      price: 70,
      img: "foodDelivery/fries3",
    },
    {
      productId: 8,
      itemName: "Large Fries",
      desc: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
      price: 70,
      img: "foodDelivery/fries4",
    },
  ];

  const drinks = [
    {
      productId: 9,
      itemName: "Cold Coffee",
      desc: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
      price: 40,
      img: "foodDelivery/drink1",
    },
    {
      productId: 10,
      itemName: "Coca cola",
      desc: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
      price: 40,
      img: "foodDelivery/drink2",
    },
    {
      productId: 11,
      itemName: "Sprite",
      desc: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
      price: 40,
      img: "foodDelivery/drink3",
    },
    {
      productId: 12,
      itemName: "Hot coffee",
      desc: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
      price: 40,
      img: "foodDelivery/drink4",
    },
  ];

  const offers = [
    {
      productId: 13,
      name: "First Order Discount",
      desc: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
      discount: "-20%",
      img: "foodDelivery/offer1",
    },
    {
      productId: 14,
      name: "Vegan Discount",
      desc: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
      discount: "-30%",
      img: "foodDelivery/offer2",
    },
    {
      productId: 15,
      name: "Free ice Cream Offer",
      desc: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
      discount: "-100%",
      img: "foodDelivery/offer3",
    },
  ];

  const Navbar = [
    "Offers",
    "Burgers",
    "Fries",
    "Snacks",
    "Salads",
    "Cold drinks",
    "Happy Meal®",
    "Desserts",
    "Hot drinks",
    "Sauces",
    "Orbit®",
  ];

  return (
    <div className={style.container}>
      {/* // div heading */}
      <div className={style.searchDiv}>
        <h2>All Offers from McDonald’s East London</h2>
        <div className={style.search}>
          <img src="/images/search.png" alt="" className={style.searchIcon} />
          <input
            type="text"
            placeholder="Search from menu..."
            className={style.searchInput}
          />
        </div>
      </div>

      {/* // div navbar */}
      <div className={style.navbar}>
        {Navbar.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>

      <div className={style.setbasket}>
        <div style={{ width: showCart ? "70%" : "100%" }}>
          {/* //div offer */}

          <div className={style.offer}>
            {offers.map((offer) => (
              <div className={style.insideOffer} key={offer.productId}>
                <AdvancedImage
                  cldImg={cld.image(offer.img)}
                  className={style.offerImg}
                />
                <div className={style.offerText}>
                  <p className={style.RestaurantName}>McDonald’s India</p>
                  <h3>{offer.name}</h3>
                </div>
                <p className={style.discount}>{offer.discount}</p>
                <AdvancedImage
                  cldImg={cld.image("foodDelivery/plusIcon")}
                  className={style.dishPlus}
                />
              </div>
            ))}
          </div>

          {/* //Dishes container */}

          <div>
            <h1>Burger</h1>
            <div className={style.dishParent}>
              {burgers.map((burger) => (
                <div className={style.dishContainer} key={burger.productId}>
                  <div className={style.dishText}>
                    <div className={style.dishTextValue}>
                      <h5>{burger.itemName}</h5>
                      <p className={style.dishdesc}>{burger.desc}</p>
                      <h6>₹ {burger.price}</h6>
                    </div>
                    <div className={style.dishImage}>
                      <AdvancedImage
                        cldImg={cld.image(burger.img)}
                        className={style.burgerImg}
                      />
                      <AdvancedImage
                        cldImg={cld.image("foodDelivery/plusIcon")}
                        className={style.dishPlus}
                        onClick={() => addItemToCart(burger)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h1>Fries</h1>
              <div className={style.dishParent}>
                {fries.map((fry) => (
                  <div className={style.dishContainer} key={fry.productId}>
                    <div className={style.dishText}>
                      <div className={style.dishTextValue}>
                        <h5>{fry.itemName}</h5>
                        <p className={style.dishdesc}>{fry.desc}</p>
                        <h6>₹ {fry.price}</h6>
                      </div>
                      <div className={style.dishImage}>
                        <AdvancedImage
                          cldImg={cld.image(fry.img)}
                          className={style.burgerImg}
                        />
                        <AdvancedImage
                          cldImg={cld.image("foodDelivery/plusIcon")}
                          className={style.dishPlus}
                          onClick={() => addItemToCart(fry)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h1>Cold Drinks</h1>
              <div className={style.dishParent}>
                {drinks.map((drink) => (
                  <div className={style.dishContainer} key={drink.productId}>
                    <div className={style.dishText}>
                      <div className={style.dishTextValue}>
                        <h5>{drink.itemName}</h5>
                        <p className={style.dishdesc}>{drink.desc}</p>
                        <h6>₹ {drink.price}</h6>
                      </div>
                      <div className={style.dishImage}>
                        <AdvancedImage
                          cldImg={cld.image(drink.img)}
                          className={style.burgerImg}
                        />
                        <AdvancedImage
                          cldImg={cld.image("foodDelivery/plusIcon")}
                          className={style.dishPlus}
                          onClick={() => addItemToCart(drink)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {showCart && <Basket />}
      </div>

      {/* //restaurant Timing */}
      <div className={style.timing}>
        <div className={style.portion}>
          <div className={style.timeHeading}>
            <img src="/images/Tracking.png" alt="" />
            <h2>Delivery information</h2>
          </div>
          <p>Monday: 12:00 AM–3:00 AM, 8:00 AM–3:00 AM</p>
          <p>Tuesday: 8:00 AM–3:00 AM</p>
          <p>Wednesday: 8:00 AM–3:00 AM</p>
          <p>Thursday: 8:00 AM–3:00 AM</p>
          <p>Friday: 8:00 AM–3:00 AM</p>
          <p>Saturday: 8:00 AM–3:00 AM</p>
          <p>Sunday: 8:00 AM–12:00 AM</p>
          <p>Estimated time until delivery: 20 min</p>
        </div>
        <div className={style.portion}>
          <div className={style.timeHeading}>
            <img src="/images/ID.png" alt="" />
            <h2>Contact information</h2>
          </div>
          <p>
            If you have allergies or other dietary restrictions, please contact
            the restaurant. The restaurant will provide food-specific
            information upon request.
          </p>
          <h5>Phone number</h5>
          <p>+934443-43</p>
          <h5>Website</h5>
          <p>http://mcdonalds.uk/</p>
        </div>
        <div className={`${style.portion} ${style.portion2}`}>
          <div className={style.timeHeading}>
            <img src="/images/Clock2.png" alt="" />
            <h2>Operational Times</h2>
          </div>

          <p>Monday: 8:00 AM–3:00 AM</p>
          <p>Tuesday: 8:00 AM–3:00 AM</p>
          <p>Wednesday: 8:00 AM–3:00 AM</p>
          <p>Thursday: 8:00 AM–3:00 A</p>
          <p>Friday: 8:00 AM–3:00 AM</p>
          <p>Saturday: 8:00 AM–3:00 AM</p>
          <p>Sunday: 8:00 AM–3:00 AM</p>
        </div>
      </div>
    </div>
  );
}
