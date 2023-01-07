import React, { Fragment, useEffect, useRef, useState } from "react";
import "./LoginSignUp.css";
import Loader from "../../components/layout/Loader/Loader";
import { Link, useHistory } from "react-router-dom";
import { useAlert } from "react-alert";
import { useSelector, useDispatch } from "react-redux";
import { login, clearErrors, register } from "../../actions/userAction";
import logo from "../../assets/logo.png";

const LoginSignUp = () => {
  const history = useHistory();
  const alert = useAlert();
  const dispatch = useDispatch();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;
  const [avatar, setAvatar] = useState();
  const [avatarPreview, setAvatarPreview] = useState("/Profile.png");

  const registerSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name: name,
      email: email,
      password: password,
      avatar: avatar,
    };
    dispatch(register(userData));
  };

  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (isAuthenticated) {
      history.push("/account");
    }
  }, [dispatch, alert, error, isAuthenticated, history]);

  var card = document.getElementById("card");

  function openRegister() {
    card.style.transform = "rotateY(-180deg)";
  }

  function openLogin() {
    card.style.transform = "rotateY(0deg)";
  }

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div class="logSigncontainer">
            <img src={logo} alt="quizinc" className="quizinclogo" />
            <div class="logSignCard">
              <div class="logSignInnerBox" id="card">
                <div class="logSignFront">
                  <h2>LOGIN</h2>
                  <form onSubmit={loginSubmit}>
                    <input
                      type="email"
                      class="input-box"
                      placeholder="Your Email Id"
                      required
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                    />
                    <input
                      type="password"
                      class="input-box"
                      placeholder="Password"
                      required
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                    />
                    <button type="submit" class="logSignSubmitBtn">
                      Submit
                    </button>
                  </form>
                  <button
                    type="button"
                    class="logSignBtn"
                    onClick={openRegister}
                  >
                    I'm New Here
                  </button>
                </div>
                <div class="logSignBack">
                  <h2>REGISTER</h2>
                  <form encType="multipart/form-data" onSubmit={registerSubmit}>
                    <input
                      type="text"
                      class="input-box"
                      placeholder="Your Name"
                      required
                      name="name"
                      value={name}
                      onChange={registerDataChange}
                    />
                    <input
                      type="email"
                      class="input-box"
                      placeholder="Your Email Id"
                      required
                      name="email"
                      value={email}
                      onChange={registerDataChange}
                    />
                    <input
                      type="password"
                      class="input-box"
                      placeholder="Password"
                      required
                      name="password"
                      value={password}
                      onChange={registerDataChange}
                    />
                    <div id="registerImage">
                      <img src={avatarPreview} alt="Avatar Preview" />
                      <input
                        type="file"
                        name="avatar"
                        accept="image/*"
                        onChange={registerDataChange}
                        className="chooseFileBox"
                      />
                    </div>
                    <button type="submit" class="logSignSubmitBtn">
                      Submit
                    </button>
                  </form>
                  <button type="button" class="logSignBtn" onClick={openLogin}>
                    I've an account
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="footer">
            <div class="footer-container">
              <div class="footer-row">
                <div class="footer-col">
                  <div class="social-icon">
                    <a href="#">
                      <i class="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-pinterest"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </div>
                  <br />
                </div>
                <div class="copyright">
                  <h2>All rights reserved. Copyright © QuizInc 2022</h2>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default LoginSignUp;
