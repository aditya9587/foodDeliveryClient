import React,{useContext, useState} from "react";
import style from "./EditPayment.module.css";
import { addPayment } from "../../../../server/controller/Payment";
import { RestaurantContext } from "../../ContextApi/RestaurantContext";
export default function EditPayrment() {

  // const { cardDetials ,setCardDetails } = useContext(RestaurantContext);
  const [cardDetails , setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "" ,
    nameOnCard: ""
  });

  async function handleCardInputs(e) {
      const { name, value} = e.target;
      setCardDetails({ ...cardDetails, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form submission initiated with card details:", cardDetails);
    try {
      const response = await addPayment(cardDetails);
      console.log("Server response received:", response);

      if (response.status === 201) {
        console.log("Payment method updated successfully");
      } else {
        console.log("Failed to update payment method, status code:", response.status);
      }
    } catch (error) {
      console.log("Error occurred during payment method update:", error);
    }
  }

  return (
    <div className={style.container}>
      <h2>Edit Payment Method</h2>
      <form className={style.paymentForm} onSubmit={handleSubmit}>
        <label>
          Card Number
          <input type="text" placeholder="0000 0000 0000 0000" onChange={handleCardInputs} name="cardNumber"  value={cardDetails.cardNumber}/>
        </label>
        <label>
          Expiry Date
          <input type="text" placeholder="mm/yy" onChange={handleCardInputs} name="expiryDate" value={cardDetails.expiryDate} />
        </label>
        <label>
          CVV
          <input type="text" placeholder="000" onChange={handleCardInputs} name="cvv"  value={cardDetails.cvv}/>
        </label>
        <label>
          Name on Card
          <input type="text" placeholder="John Doe"  onChange={handleCardInputs} name="nameOnCard" value={cardDetails.nameOnCard}/>
        </label>
        <div className={style.buttons}>
          <button className={style.remove}>Remove</button>
          <div className={style.saveCancel}>
            <button className={style.cancel}>Cancel</button>
            <button className={style.save} onSubmit={handleSubmit}>Save Changes</button>
          </div>
        </div>
      </form>
    </div>
  );
}
