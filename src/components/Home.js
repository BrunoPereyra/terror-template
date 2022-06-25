import React from "react";
import LeftLayout from "./layout/LeftLayout";
import Posts from "./stories/Posts";
import RightLayoutHome from "./layout/RightLayoutHome";
import "../static/styles/Home.css"

export default function Home() {
    return (
        <div id="home">
            <LeftLayout />
            <div id="div_posts_home">
                <Posts />
                <Posts />
                <Posts />
                <Posts />
                <Posts />
                <Posts />
                <Posts />
                <Posts />
                <Posts />
            </div>
            <RightLayoutHome />
        </div>
    )
}