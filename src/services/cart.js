import axios from "axios";

export const getCart = async () => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/cart/getcart/`,
      {
        headers: {
          Authorization: ` ${localStorage.getItem("token")}`,
        },
      }
    );
    return res;
  } catch (error) {
    if (error.response.status === 400) {
      return error.response;
    }
  }
};

export const addtocart = async (data) => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/cart/addtocart`,
      data,
      {
        headers: {
          Authorization: ` ${localStorage.getItem("token")}`,
        },
      }
    );
    return res;
  } catch (error) {
    if (error.response.status === 400) {
      return error.response;
    }
  }
};

export const removeItem = async (data) => {
  try {
    const res = await axios.delete(
      `${import.meta.env.VITE_API_URL}/api/cart/removeitem`,
      {
        headers: {
          Authorization: ` ${localStorage.getItem("token")}`,
        },
        data: data,
      }
    );
    return res;
  } catch (error) {
    if (error.response.status === 400) {
      return error.response;
    }
  }
};
