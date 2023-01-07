import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { TreeItem, TreeView } from "@material-ui/lab";
import PostAddIcon from "@material-ui/icons/PostAdd";
import favicon from "../../images/favicon.ico";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <img src={favicon} alt="QuizInc" />
      </Link>
      <Link to="/admin/dashboard">
        <p>
          <DashboardIcon /> Dashboard
        </p>
      </Link>
      <Link>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ImportExportIcon />}
        >
          <TreeItem nodeId="1" label="Questions">
            <Link to="/admin/questions">
              <TreeItem nodeId="2" label="All" icon={<PostAddIcon />} />
            </Link>

            <Link to="/admin/new/question">
              <TreeItem nodeId="3" label="Create" icon={<AddIcon />} />
            </Link>
          </TreeItem>
        </TreeView>
      </Link>
      <Link to="/admin/users">
        <p>
          <PeopleIcon /> Users
        </p>
      </Link>

    </div>
  );
};

export default Sidebar;
