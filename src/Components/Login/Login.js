import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import signin from "../../images/login.jpg";
import google from "../../images/google.jpg";

import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [username, setusername] = useState();
  const [password, setpassword] = useState();
  const [userId, setUserId] = useState();

  const login = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, username, password).then((res) => {
        console.log(res);
        setUserId(res.user.uid);
        console.log("verfied");
      });
    } catch (e) {
      alert("Please check your credentials");
    }
  };
  return (
    <div className="login-container">
      <div className="login-box">
        <form className="form">
          <h3>
            Welcome{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(90deg, #C33764, #1D2671)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Back!
            </span>
          </h3>

          <p style={{ color: "#777777" }}>Step Inside the Headlines.</p>
          <label>Email</label>

          <input
            type="text"
            placeholder="Email for magic codes"
            className="inpt-user"
            onChange={(e) => {
              setusername(e.target.value);
            }}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Shhh... your password"
            className="inpt-pwd"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <button
            className="btn-log"
            onClick={(e) => {
              login(e);
            }}
          >
            Get Started
          </button>
          <p className="login-text">or continue with</p>
          <Link to="/" state={userId}>
            <button className="btn-log btn-google">Home</button>
          </Link>
          <button className="btn-log btn-google">
            {" "}
            <img src={google} height={33} />
            Sign in with Google{" "}
          </button>
          <p className="login-text">
            Not one among us? <a href="#">Sign up now!</a>
          </p>
        </form>
      </div>
      <div className="login-image">
        <img src={signin} height={520} width={550} alt="Sign In" />

        <div className="right-bar"></div>
      </div>
    </div>
  );
}

export default Login;
