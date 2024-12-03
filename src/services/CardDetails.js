import axios from "axios";

export const getCardDetails = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return res.status(400).json({ message: "Authorization token is missing" });
  }
  try {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/payment/getPayment`, {
      headers: {
        Authorization: ` ${token}`,
      },
    });
    return res;
  } catch (error) {
    return res.status(400).json({ message: "api call error" });
  }
};

export const addCardDetails = async (data) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      return res.status(400).json({ message: "Authorization token is missing" });
    }
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/payment/addPayment`, data, {
      headers: {
        Authorization: ` ${token}`,
      },
    });
    return res;
  } catch (error) {
    return res.status(400).json({ message: "api call error" });
  }
};

export const updateCardDetails = async (data) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      return res.status(400).json({ message: "Authorization token is missing" });
    }
    const res = await axios.put(`${import.meta.env.VITE_API_URL}/api/payment/updatePayment`, data, {
      headers: {
        Authorization: ` ${token}`,
      },
    });
    return res;
  } catch (error) {
    return res.status(400).json({ message: "api call error" });
  }
}