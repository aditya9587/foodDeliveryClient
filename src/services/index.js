import axios from 'axios';

export const usersignup = async (data) => {
  try {
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/signup`, data,{
      headers:{
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }); 
    return res;
  } catch (error) {
    return res.status(400).json({ message: "api call error" });
  }
}

export const userlogin = async (data) => {
  try {
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/login`, data,{
      headers:{
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }); 
    return res;
  } catch (error) {
    return res.status(400).json({ message: "api call error" });
  }
}

export const getUserDetails = async () => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/user`, {
      headers: {
        Authorization: ` ${localStorage.getItem("token")}`,
      },  
    });   
    return res;
  }
  catch (error) {
    return res.status(400).json({ message: "api call error" });
  } 
}