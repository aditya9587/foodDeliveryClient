import React, { useContext, useState, useEffect, useRef } from "react";
import style from "./Profile.module.css";
import CartBar from "../CartNavbar/CartBar";
import Navbar from "../Navbar/Navbar";
import FooterPanel from "../Footer/FooterPanel";
import EditPayrment from "../EditPayment/EditPayrment";
import  { useNavigate } from "react-router-dom";

export default function Profile() {
  const modalRef = useRef();

  const [isEdit, setIsEdit] = useState(false);
  const [EditPayment, setEditPayment] = useState(false);

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    country: "India",
  });

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
      setUserDetails(details);
    };
    fetchUserDetails();
  }, []);

  return (
    <>
      <div className={style.container}>
        <CartBar />
        <Navbar />
        <div>
          <div className={style.header}>
            <img src="/images/arrow-left.png" alt="" onClick={() => navigate(-1)} />
            <h4>My Profile</h4>
          </div>
          <div className={style.profile}>
            <img src="/images/profile.png" alt="" />
            <p>{username}</p>
            <button className={style.edit}>{isEdit ? "Save" : "Edit"}</button>
          </div>
          <div className={style.details}>
            <label>
              Full Name
              <input type="text" value={userDetails.name} />
            </label>
            <label>
              Email Address
              <input type="text" value={userDetails.email} />
            </label>
            <label>
              Phone Number
              <input type="text" value={userDetails.phoneNumber} />
            </label>
            <label>
              Country
              <input type="text" value={userDetails.country} />
            </label>
          </div>
          <hr />
          <div className={style.payment}>
            <h3>Saved Payment Methods</h3>
            <div className={style.paymentAdd}>
              <img
                src="/images/Addplus.png"
                alt=""
                onClick={() => setEditPayment(true)}
              />
              <p>Add New Card</p>
            </div>
          </div>
        </div>
      </div>
      <FooterPanel />

      {EditPayment && (
        <div className={style.modal} ref={modalRef} onClick={closeModal}>
          <EditPayrment />
        </div>
      )}
    </>
  );
}
