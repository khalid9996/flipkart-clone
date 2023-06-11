import React from "react";
import "./login.css";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import LOGINLOGO from "../../assets/loginwindowlogo.png";
import { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import app from "../../firebase/firebase";
import { useStateValue } from "../../StateProvider/StateProvider";
import Layout from "../Layout/Layout";
import Footer from "../Layout/Footer";
import Nav from "../Layout/Nav";

const Login = () => {
  const [form, setForm] = useState("signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const auth = getAuth(app);

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(`Signup, Email : ${email} , Password : ${password}`);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ..
      });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(`Login, Email : ${email} , Password : ${password}`);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  return (
    <>
      <Nav />
      <div className="login__page">
        <div className="login__root">
          <div className="login__window__parent">
            <div className="login__window">
              <div className="login__left">
                <div className="login__left__div">
                  <h2>Login</h2>
                  <span>Get access to your</span>
                  <span>Orders, Wishlist and</span>
                  <span>Recommendations</span>
                </div>

                <img src={LOGINLOGO} alt="login-logo" />
              </div>

              <div className="login__right">
                <form>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Enter Email/Mobile number"
                  />
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Enter Password"
                  />
                  <span>
                    By continuing, you agree to Flipkart's Terms of Use and
                    Privacy Policy.
                  </span>
                  {form == "signup" ? (
                    <button onClick={handleSignup}>Sign Up</button>
                  ) : (
                    <button onClick={handleLogin}>Login</button>
                  )}
                </form>

                <span
                  onClick={() =>
                    form == "signup" ? setForm("login") : setForm("signup")
                  }
                >
                  {form == "login"
                    ? "New to Flipkart? Create an account"
                    : "Existing User? Log in"}
                </span>
              </div>
            </div>
            <Link to="/">
              <AiOutlineClose className="login__cross" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
