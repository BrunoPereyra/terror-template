import React from "react";
import { Avatar } from '@mui/material';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import "../../static/styles/PostsHome.css"

export default function PostsHome() {
    return (
        <div id="posts_home">
            <div id="data_user_posts_home">
                <Avatar />
                <h1 id="name_user_post_home">Bruno_dev</h1>
                <span id="point_posts_home">.</span>
                <span id="date_posts_home">2004</span>
            </div>
            <div id="post_the_posts_home">
                <div>
                    <h1 id="title_posts_home">to welcome my app 2022to welcome my app 2022to welcome my app 2022</h1>
                    <h1 id="subtitle_posts_home">
                        This application can become the most complex
                        app that I have done to date, because I can implement
                        many functionalities
                        This application can become the most complex
                        app that I have done to date, because I can implement
                        many functionalities
                        This application can become the most complex
                        app that I have done to date, because I can implement
                        many functionalities
                    </h1>
                </div>
                <img src="https://miro.medium.com/max/1400/1*xnBj5dQr-czeFjkqjvZoBg.jpeg" width="112" />
            </div>
            <div id="about_the_publication_posts_home">
                <div id="thema_read_posts_home">
                    <h3 id="theme_posts_home">programming</h3>
                    <span id="reading_time_posts_home">10 minutes</span>
                </div>
                <div id="in_relation_to_the_publication_posts_home">
                    <BookmarkAddOutlinedIcon />
                </div>
            </div>
        </div>
    )
}