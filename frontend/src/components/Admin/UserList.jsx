import React, { Fragment, useEffect} from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./UserList.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";
import EditIcon from "@material-ui/icons/Edit";

import { getAllUsers, clearErrors} from "../../actions/userAction";


const UsersList = ({ history }) => {
  const dispatch = useDispatch();

  const alert = useAlert();
 

  const { error, users } = useSelector((state) => state.allUsers);



  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }


    dispatch(getAllUsers());
  }, [dispatch, alert, error, history]);

  const columns = [
    { field: "id", headerName: "User ID", flex: 0.8 },

    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 0.5,
    },

    {
      field: "role",
      headerName: "Role",
      type: "number",
      flex: 0.3,
      cellClassName: (params) => {
        return params.getValue(params.id, "role") === "admin"
          ? "greenColor"
          : "redColor";
      },
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link to={`/admin/user/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];

  users &&
    users.forEach((item) => {
      rows.push({
        id: item._id,
        role: item.role,
        email: item.email,
        name: item.name,
      });
    });

  return (
    <Fragment>
      <MetaData title={`ALL USERS - Admin`} />

      <div className="dash">
        <div className="userListContainer">
          <h1 id="userListHeading">ALL USERS</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={3}
            disableSelectionOnClick
            className="userListTable"
            autoHeight
          />
        </div>
        <div className="link">
          <Link to="/admin/dashboard">Go Back To DashBoard</Link>
        </div>
      </div>
    </Fragment>
  );
};

export default UsersList;
