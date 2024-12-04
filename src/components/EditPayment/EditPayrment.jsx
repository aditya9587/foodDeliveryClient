import React,{useContext, useState} from "react";
import style from "./EditPayment.module.css";
import { addCardDetails } from "../../services/CardDetails";
import { RestaurantContext } from "../../ContextApi/RestaurantContext";
export default function EditPayrment({close}) {

  const { allCards, setAllCards} = useContext(RestaurantContext);
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
  //card Details form handler validation
    const handleValidation = () => {
      const { cardNumber, expiryDate, cvv, nameOnCard } = cardDetails;
      if (cardNumber.trim() === "" || expiryDate.trim() === "" || cvv.trim() === "" || nameOnCard.trim() === "") {
        return false;
      }
      return true;  

    }


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!handleValidation()) {
      alert("Please fill all the fields correctly");
      return;
    }
    try {
      const response = await addCardDetails(cardDetails);

      if (response.status === 201) {
        setAllCards([...allCards, cardDetails]);
        close();
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
            <button className={style.cancel} onClick={close}>Cancel</button>
            <button className={style.save} onSubmit={handleSubmit}>Save Changes</button>
          </div>
        </div>
      </form>
    </div>
  );
}
