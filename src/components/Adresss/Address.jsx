import React, { useEffect, useRef, useState } from "react";
import style from "./Address.module.css";
import { useNavigate } from "react-router-dom";
import { addAddress, getUserAddresses } from "../../services/location.js";


export default function Address() {
  const [addressPopup, setAddressPopup] = useState(false);
  const [address, setAddress] = useState(
    {
      state: "",
      city: "",
      pincode: "",
      phoneNumber: "",
      fullAddress: "",
    },
  );
  const [addressList, setAddressList] = useState([]);
  const navigate = useNavigate();
  const userName = localStorage.getItem("name");

  useEffect(() => {
    const getAddress = async () => {
      const response = await getUserAddresses();
      setAddressList(response.data.addresses);
    };
    getAddress();
  }, [setAddress]);

  const modalref = useRef();
  const closemodal = (e) => {
    if (modalref.current === e.target) {
      setAddressPopup(!addressPopup);
    }
  };
  const handleAddress = (event) => {
    const { name, value } = event.target;
    setAddress((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmitAddress = async (e) => {
    e.preventDefault();
    const response = await addAddress(address);
    if (response.status === 201) {
      const updatedResponse = await getUserAddresses();
      setAddressList(updatedResponse.data.addresses);
      setAddressPopup(!addressPopup);
    }
  };
  return (
    <>
      <div>
        <div className={style.heading}>
          <img src="/images/arrow-left.png" alt=""  onClick={() => navigate(-1)}/>
          <h2>Your Addresses</h2>
        </div>

        <div className={style.AddAddress}>
          <div className={style.AddressAdd}>
            <img
              src="/images/Addplus.png"
              alt=""
              onClick={() => setAddressPopup(!addressPopup)}
            />
            <p>Add Address</p>
          </div>

          {/* //show address list    */}
          {addressList.map((item, index) => (
            <div className={style.addressList}>
              <div className={style.address} key={index}>
                <h5>{userName}</h5>
                <p>
                  {item.fullAddress} {item.state} {item.city} {item.pincode}
                  {""}
                </p>
                <p>Phone number: {item.phoneNumber}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>  
            {addressPopup && (
        <div className={style.popupCover} ref={modalref} onClick={closemodal}>
          <div className={style.popup}>
            <div className={style.heading}>
              <img src="/images/locationGrey.png" alt="" />
              <p>Add Address</p>
            </div>
            <form onSubmit={handleSubmitAddress}>
              <div className={style.addInput}>
                <input
                  type="text"
                  placeholder="State"
                  onChange={handleAddress}
                  name="state"
                />
                <input
                  type="text"
                  placeholder="City/District"
                  onChange={handleAddress}
                  name="city"
                />
                <input
                  type="text"
                  placeholder="Pin Code"
                  onChange={handleAddress}
                  name="pincode"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  onChange={handleAddress}
                  name="phoneNumber"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter full address"
                  className={style.fullAdd}
                  onChange={handleAddress}
                  name="fullAddress"
                />
              </div>
              <div className={style.saveBtn}>
                <button>Save Address</button>
              </div>
            </form>
          </div>
        </div>
      )}
      </div>

    </>
  );
}
