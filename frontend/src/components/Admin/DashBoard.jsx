import React ,{useEffect} from 'react';
import "./DashBoard.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import { useSelector, useDispatch } from "react-redux";
import {getAllUsers,resetState,clearErrors} from "../../actions/userAction";
import Sidebar from "./Sidebar";
import {Button} from "@material-ui/core";
import {useAlert} from "react-alert";
import {Line} from "react-chartjs-2";


const Dashboard = () => {
  
  const dispatch = useDispatch();
  const alert = useAlert();

  const {users,loading,error,isUpdated} = useSelector((state) => state.allUsers);

  useEffect(() => {
  dispatch(getAllUsers());
  if(error){
    alert.error(error);
    dispatch(clearErrors());
  }
  if(isUpdated){
  alert.success("User Reset Successfull");
  dispatch({type : "UPDATE_STATE_RESET"});
  }
  }, [dispatch,error,isUpdated,alert]);

  const handleClick = ()=>{
    dispatch(resetState());
  };

  let totalUsers = 0;
  users &&
    users.forEach((item) => {
      totalUsers++;
    });

  const lineState = {
    labels: ["Initial User", "User Increased"],
    datasets: [
      {
        label: "TOTAL Users",
        backgroundColor: ["tomato"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: [0, totalUsers],
      },
    ],
  };

  return (
    <div className="dashboard">
    <MetaData title="Dashboard - Admin Panel" />
    <Sidebar />

    <div className="dashboardContainer">
      <Typography component="h1">Dashboard</Typography>

      <div className="dashboardSummary">
        <div className="dashboardSummaryBox2">
          <Button style={{color : "white" , background:"brown", padding :"20px", margin:"20px"}} onClick={handleClick} disabled={loading} >Reset The State Of All Uers</Button>
          <Link to="/"  >Homepage</Link>
        </div>
      </div>

      <div className="lineChart">
        <Line data={lineState} />
      </div>
    </div>
  </div>
  )
}

export default Dashboard