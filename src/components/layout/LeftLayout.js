import React from "react"
import HomeIcon from '@mui/icons-material/Home';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import { Avatar } from '@mui/material';
// import HomeIcon from '@mui/icons-material/';
import "../../static/styles/LeftLayout.css"

export default function LeftLayout() {
    return (
        <nav id="nav_left_layout">
        <div id="left_layout">
            <div id="icon_app"><h2>iapp</h2></div>
            <div id="left_layout_links">
                <HomeIcon id="HomeIcon" className="left_layout_link" fontSize="large"/>
                <BookmarkAddedIcon id="BookmarkAddedIcon" className="left_layout_link" fontSize="large"/>
                <NotificationsNoneIcon id="NotificationsNoneIcon" className="left_layout_link" fontSize="large"/>
                <HistoryEduIcon id="HistoryEduIcon" className="left_layout_link" fontSize="large"/>
            </div>
            <div id="access_profile">
                <Avatar id="avatar_left_layout">a</Avatar>
            </div>
        </div>
        </nav>
    )
}