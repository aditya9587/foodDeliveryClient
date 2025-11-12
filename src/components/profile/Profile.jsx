import React, { useContext, useState, useEffect, useRef } from "react";
import style from "./Profile.module.css";
import CartBar from "../CartNavbar/CartBar";
import Navbar from "../Navbar/Navbar";
import FooterPanel from "../Footer/FooterPanel";
import EditPayrment from "../EditPayment/EditPayrment";
import { useNavigate } from "react-router-dom";
import { getUserDetails } from "../../services/index";
import { RestaurantContext } from "../../ContextApi/RestaurantContext";
import { getCardDetails } from "../../services/CardDetails";

export default function Profile() {
  const modalRef = useRef();
  const [isEdit, setIsEdit] = useState(false);
  const [EditPayment, setEditPayment] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    Gender: "Male",
    country: "India",
  });

  const { allCards, setAllCards } = useContext(RestaurantContext);

  useEffect(() => {
    const fetchCards = async () => {
      const cards = await getCardDetails();
      setAllCards(cards.data);
    };
    fetchCards();
  }, []);


  const username = localStorage.getItem("name");
  const navigate = useNavigate();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setEditPayment(false);
    }
  };

  useEffect(() => {
    const fetchUserDetails = async () => {
      const details = await getUserDetails();
      setUserDetails(details.data);
    };
    fetchUserDetails();
  }, []);

  const handleEditToggle = () => {
    setIsEdit(!isEdit);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <div className={style.container}>
        <CartBar />
        <Navbar />
        <div>
          <div className={style.header}>
            <img 
              src="/images/arrow-left.png" 
              alt="Back" 
              onClick={() => navigate(-1)}
              className="cursor-pointer" 
            />
            <h4>My Profile</h4>
          </div>
          <div className={style.profile}>
            <img src="/images/profile.png" alt="Profile" />
            <p>{username}</p>
            <button 
              className={`${style.edit} ${isEdit ? 'bg-green-500' : 'bg-blue-500'}`}
              onClick={handleEditToggle}
            >
              {isEdit ? "Save" : "Edit"}
            </button>
          </div>
          <div className={style.details}>
            <label>
              Full Name
              <input
                type="text"
                name="name"
                value={userDetails.name}
                onChange={handleInputChange}
                disabled={!isEdit}
                className={!isEdit ? style.disabled : ''}
              />
            </label>
            <label>
              Email Address
              <input
                type="email"
                name="email"
                value={userDetails.email}
                onChange={handleInputChange}
                disabled={!isEdit}
                className={!isEdit ? style.disabled : ''}
              />
            </label>
            <label>
              Phone Number
              <input
                type="text"
                name="Gender"
                value={userDetails.Gender}
                onChange={handleInputChange}
                disabled={!isEdit}
                className={!isEdit ? style.disabled : ''}
              />
            </label>
            <label>
              Country
              <input
                type="text"
                name="country"
                value={userDetails.country}
                onChange={handleInputChange}
                disabled={!isEdit}
                className={!isEdit ? style.disabled : ''}
              />
            </label>
          </div>
          <hr />
          <div className={style.payment}>
            <h3>Saved Payment Methods</h3>
            <div className={style.paymentAdd}>
              <img
                src="/images/Addplus.png"
                alt="Add payment method"
                onClick={() => setEditPayment(true)}
                className="cursor-pointer"
              />
              <p>Add New Card</p>
            </div>
            
          
          </div>
        </div>
      </div>
      <div className={style.hideInMobile}>
        <FooterPanel />
      </div>

      {EditPayment && (
        <div className={style.modal} ref={modalRef} onClick={closeModal}>
          <EditPayrment close={() => setEditPayment(false)} />
        </div>
      )}
    </>
  );
}