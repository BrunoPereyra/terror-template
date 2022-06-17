import React from "react";
import LeftLayout from "./layout/LeftLayout";
import PostsHome from "./stories/PostsHome";
import RightLayoutHome from "./layout/RightLayoutHome";
import "../static/styles/Home.css"

export default function Home() {
    return (
        <div id="home">
            <LeftLayout />
            <div id="div_posts_home">
                <PostsHome />
                <PostsHome />
                <PostsHome />
                <PostsHome />
                <PostsHome />
                <PostsHome />
                <PostsHome />
                <PostsHome />
                <PostsHome />
            </div>
            <RightLayoutHome />
        </div>
    )
}