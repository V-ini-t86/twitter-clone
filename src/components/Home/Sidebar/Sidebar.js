import "./Sidebar.css";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import SidebarLink from "./SidebarLink";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import OfflineBoltOutlinedIcon from "@mui/icons-material/OfflineBoltOutlined";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import CallMadeOutlinedIcon from "@mui/icons-material/CallMadeOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import AccessibilityNewOutlinedIcon from "@mui/icons-material/AccessibilityNewOutlined";

import { Menu, MenuItem, Button } from "@mui/material";
import { ChatOutlined } from "@mui/icons-material";
import { useStateValue } from "../../../StateProvider";
function Sidebar() {
  let value = useStateValue();
  const options = [
    { link: "Bookmarks", icon: <BookmarkBorderOutlinedIcon fontSiz0px /> },
    { link: "List", icon: <ListAltOutlinedIcon /> },
    { link: "Topic", icon: <ChatOutlined /> },
    { link: "Moments", icon: <OfflineBoltOutlinedIcon /> },
    { link: "Newsletters", icon: <PostAddOutlinedIcon /> },
    { link: "Twitter Ads", icon: <CallMadeOutlinedIcon /> },
    { link: "Analytics", icon: <BarChartOutlinedIcon /> },
    { link: "Settings", icon: <SettingsOutlinedIcon />, path: "/setting" },
    { link: "Help Center", icon: <HelpOutlineOutlinedIcon /> },
    { link: "Display", icon: <BrushOutlinedIcon /> },
    { link: "Keyboard shortcuts", icon: <AccessibilityNewOutlinedIcon /> },
  ];

  const [open, setOpen] = useState(false);
  const [openLogout, setOpenLogout] = useState(false);
  const history = useHistory();
  const handleClick = (event) => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="sidebar">
      <Button sx={{ borderRadius: "50%", width: "60px", height: "60px" }}>
        <img src="images/twitter.png" alt="twi" />
      </Button>
      <Link className="side-link" to="/home">
        <SidebarLink text="Home" Icon={HomeIcon} />
      </Link>
      <Link className="side-link" to="/explore">
        <SidebarLink text="Explore" Icon={SearchIcon} />
      </Link>
      <SidebarLink text="Notifications" Icon={NotificationsNoneIcon} />
      <SidebarLink text="Messages" Icon={MailOutlineIcon} />
      <SidebarLink text="Bookmarks" Icon={BookmarkBorderIcon} />
      <SidebarLink text="Lists" Icon={ListAltIcon} />
      <Link className="side-link" to="/profile">
        <SidebarLink
          text="Profile"
          Icon={PermIdentityIcon}
          classSide="side-link"
        />
      </Link>
      <Button onClick={handleClick} id="moreLinks">
        <MoreHorizIcon /> More
      </Button>
      <Button id="tweet">Tweet</Button>

      <Menu open={open} onClose={handleClose} id="long-menu">
        {options.map((option) => (
          <MenuItem key={option.link} onClick={handleClose}>
            <Link className="long-link" to={option.path && option.path}>
              <div>{option.icon}</div> <div> {option.link}</div>
            </Link>
          </MenuItem>
        ))}
      </Menu>
      <div className="logout">
        <SidebarLink
          text={value.name}
          Icon={PermIdentityIcon}
          click={() => setOpenLogout(true)}
        />
        <Menu
          open={openLogout}
          onClose={() => {
            setOpenLogout(false);
          }}
        >
          <MenuItem
            onClick={() => {
              value = {};
              history.push("/");
            }}
          >
            Logout
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default Sidebar;
