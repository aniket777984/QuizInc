import React, { Fragment } from "react";
import Loader from "../layout/Loader/Loader";
import "./UserCard.css";

const UserCard = ({ user }) => {
  return (
    <Fragment>
      {user.rank < 0 ? (
        <Loader />
      ) : (
        <div className="CartItemCard">
          <img src={user.avatar.url} alt="ssa" />
          <div>
            <p>{user.name}</p>
            <span>{`Score: ${user.score} points`}</span>
            <span>{`Rank : ${user.rank}`}</span>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default UserCard;
