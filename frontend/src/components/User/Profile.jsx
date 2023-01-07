import React, { useEffect, Fragment ,useRef} from "react";
import "./Profile.css";
import MetaData from "../layout/MetaData";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import Loader from "../layout/Loader/Loader";
import VanillaTilt from "vanilla-tilt";
import logo from "../../assets/logo.png";

const Profile = ({ history }) => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated === false) history.push("/login");
  }, [history, isAuthenticated]);


  const options = {
    scale: 1,
    speed: 1000,
    max: 10
  };
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
    // eslint-disable-next-line
  },[]);

  return (
    <Fragment>
      <MetaData title="Profile" />
      {loading ? (
        <Loader />
      ) : (
        <div class="profile-container">
        <img src={logo} alt="quizinc" className="quizinclogo" />  
        <div class="profile-card" ref={tilt} {...options} >
            <img src={user.avatar.url} alt="Aniket" />
            <h2>{user.name}</h2>
            <p>Email :-    {user.email}</p>
            <Link to="/play/welcome" className="playquizbtn" >Play Quiz</Link>
            <Link to="/display/leaderboard" className="btn" >LeaderBoard</Link>
        </div>
       </div>
      )}
    </Fragment>
  );
};




export default Profile;
