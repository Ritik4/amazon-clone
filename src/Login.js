import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      {/* <div className='login__container'>
                <div className='signIn'>
                    <h1>Sign-In</h1>

                    <div className='login__input'>
                        <label>Email or mobile phone number</label>
                        <input type="text" />
                    </div>

                    <button>Continue</button>

                    <div className='login__notice'>
                        <p>By continuing, you agree to Amazon's <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice.</a> </p>
                    </div>

                    <div className='login__help'>
                        <ArrowRightIcon/>
                        <ul>
                            <li><a href="#">Need help?</a></li>
                        </ul>
                    </div>
                </div>

                <div className='newAccount'>
                     <span>New to Amazon?</span>
                     <button>Create your Amazon account</button>
                </div>``

            </div> */}

      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            type="email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <h5>Password</h5>
          <input
            value={password}
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button onClick={login} type="submit" className="login__signInButton">
            Sign in
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon's Conditions of Use & Sale Please
          see Our Privacy Notice, our Cookies Notice and our intrest-based Ads
          Notice
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Amazone Account
        </button>
      </div>
    </div>
  );
}

export default Login;
