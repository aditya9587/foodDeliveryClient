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


export const generateShareableLink = async () => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/cart/share`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const getSharedCart = async (shareToken) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/cart/shared/${shareToken}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};