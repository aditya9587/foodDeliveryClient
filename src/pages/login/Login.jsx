import React, { useState } from "react";
import style from "./Login.module.css";
import FooterPanel from "../../components/Footer/FooterPanel";
import { AdvancedImage } from "@cloudinary/react";
import { toast } from "react-toastify";
import cld from "../../utils/ImageUtil";
import { usersignup , userlogin} from "../../services/index.js";
import { useNavigate } from "react-router-dom";



export default function Login() {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [signupData, setSignupData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const loginValidation = () => {
    if (!loginData.email || !loginData.password) {
      toast.error("Please fill all the fields correctly");
      return false;
    }
    if (!loginData.email.includes("@") || !loginData.email.includes(".")) {
      toast.error("Please enter a valid email address and include @ and .");
      return false;
    }
    if (loginData.password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return false;
    }

    return true;
  };

  const signupValidation = () => {
    if (
      !signupData.name &&
      !signupData.phone &&
      !signupData.email &&
      !signupData.password
    ) {
      toast.error("Please fill all the fields");
      return false;
    }
    if (signupData.phoneNumber.length !== 10) {
      toast.error("Please enter a valid phone number must equal to 10 digits");
      return false;
    }
    if (!signupData.email.includes("@") || !signupData.email.includes(".")) {
      toast.error("Please enter a valid email address and include @ and .");
      return false;
    }
    if (signupData.password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return false;
    }
    return true;
  };

  function handleLogin(e) {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  }

  function handleSignup(e) {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true)

    if (!showLogin) {
      try {
        if (loginValidation()) {
          const dataRes = await userlogin(loginData);
          console.log(dataRes);
          if (dataRes.status === 200) {
            localStorage.setItem("token", dataRes.data.token);
            localStorage.setItem("name", dataRes.data.username);
            toast.success("Login Successful");
            navigate("/home");
          }
        }
      } catch (error) {
        toast.error("Login Failed");
      }finally{
        setIsLoading(false)
      }
    }

    //signup request
    if (showLogin) {
      try {
        if (signupValidation()) {
          const dataRes = await usersignup(signupData);
          if (dataRes.status === 200) {
            toast.success("Signup Successful");
            setShowLogin(!showLogin);
          }
        }
      } catch (error) {
        toast.error("Signup Failed");
      }
      finally{
        setIsLoading(false)
      }
    }
  }
 
  const myImage = cld.image("loginImage");

  return (
    <div className={style.container}>
      <div className={style.login}>
        {showLogin ? (
          <div className={style.loginForm}>
            <img src="/images/LOGO1.png" alt="" className={style.logo} />
            <h1>Welcome 👋</h1>
            <p>
              Today is a new day. It's your day. You shape it. Sign up to start
              ordering.
            </p>
            <form onSubmit={handleSubmit}>
              <label>
                Name
                <input
                  type="text"
                  placeholder="eg. John A"
                  name="name"
                  onChange={handleSignup}
                />
              </label>
              <label>
                Phone Number
                <input
                  type="text"
                  placeholder="Enter your 10 digit mobile number"
                  name="phoneNumber"
                  onChange={handleSignup}
                />
              </label>
              <label>
                Email
                <input
                  type="text"
                  placeholder="Example@email.com"
                  name="email"
                  onChange={handleSignup}
                />
              </label>
              <label>
                Password
                <input
                  type="password"
                  placeholder="At least 8 characters"
                  name="password"
                  onChange={handleSignup}
                />
              </label>
              <button disabled={isLoading}> { isLoading ? "Loading..." :"Continue"} </button>
            </form>
            <p>
              Already have an account?
              <span
                className={style.signupSpan}
                onClick={() => setShowLogin(!showLogin)}
              >
                Sign in
              </span>
            </p>
          </div>
        ) : (
          <div className={style.loginForm}>
            <img src="/images/LOGO1.png" alt="" className={style.logo} />

            <h1>Welcome Back 👋</h1>
            <p>
              Today is a new day. It's your day. You shape it. Sign in to start
              ordering.
            </p>
            <form onSubmit={handleSubmit}>
              <label>
                Email
                <input
                  type="text"
                  placeholder="Example@email.com"
                  name="email"
                  onChange={handleLogin}
                />
              </label>
              <label>
                Password
                <input
                  type="password"
                  placeholder="At least 8 characters"
                  name="password"
                  onChange={handleLogin}
                />
              </label>
              <button disabled={isLoading}> {isLoading? "Loading..." : "Sign in" }</button>
            </form>
            <p>
              Don't you have an account?
              <span
                className={style.signupSpan}
                onClick={() => setShowLogin(!showLogin)}
              >
                Sign up{" "}
              </span>
            </p>
          </div>
        )}
        <AdvancedImage cldImg={myImage} className={style.sideImg} />
      </div>

      <FooterPanel />
    </div>
  );
}
