import axios from "axios"

export const addAddress = async (data) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Authorization token is missing");
    }

    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/location/addAddress`,
      data,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );

    return res;
  } catch (error) {
    if (error.response) {
      console.error("API error:", error.response);
      return error.response;
    } else {
      console.error("Error:", error.message);
      throw error;
    }
  }
}

//api to get user addresses
export const getUserAddresses = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Authorization token is missing");
    }

    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/location/getAddress`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );

    return res;  
  } catch (error) {
    if (error.response) {
      console.error("API error:", error.response);
      return error.response;
    } else {
      console.error("Error:", error.message);
      throw error;
    }
  }
}         
