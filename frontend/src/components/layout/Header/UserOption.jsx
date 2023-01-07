import React, { useState ,Fragment} from "react";
import "./Header.css";
import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
import Backdrop from "@material-ui/core/Backdrop/Backdrop";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ListAltIcon from "@material-ui/icons/ListAlt";
import HomeIcon from "@material-ui/icons/Home";
import { useHistory } from "react-router-dom";
import { useAlert } from "react-alert";
import {logout} from "../../../actions/userAction";
import {useDispatch} from "react-redux";

const UserOption = ({ user }) => {

  const alert = useAlert();
  const history = useHistory();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const options = [
    { icon: <HomeIcon />, name: "Home", func: home },
    { icon: <ListAltIcon />, name: "LeaderBoard", func: leaderBoard },
    { icon: <PersonIcon />, name: "Profile", func: account },
    { icon: <ExitToAppIcon />, name: "Logout", func: logoutUser },
  ];

  if (user.role === "admin") {
    options.unshift({
      icon: <DashboardIcon />,
      name: "Dashboard",
      func: dashboard,
    });
  }

  function home()
  {
    history.push("/");
  }

  function dashboard() {
    history.push("/admin/dashboard");
  }
  function account() {
    history.push("/account");
  }
  function leaderBoard() {
    history.push("/display/leaderboard");
  }
  function logoutUser() {
    dispatch(logout());
    alert.success("Logout Successfully");
  }

  return (
    <Fragment>
      <Backdrop open={open} style={{ zIndex: "10" }} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        style={{ zIndex: "1200"}}
        open={open}
        direction="up"
        className="instantLink"
        icon={
          <img
            className="instantLinkIcon"
            src={user.avatar.url ? user.avatar.url : "/Profile.png"}
            alt="Profile"
          />
        }
      >
      {options.map((item) => (
          <SpeedDialAction
            key={item.name}
            icon={item.icon}
            tooltipTitle={item.name}
            onClick={item.func}
            className="instantLinkAction"
            tooltipOpen={window.innerWidth<700?true:false}
          />
        ))} 
      </SpeedDial>
    </Fragment>
  );
};

export default UserOption;
