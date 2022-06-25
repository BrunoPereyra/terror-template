import React from "react"
import "../../static/styles/profile.css"
import LeftLayout from "../layout/LeftLayout";
import RightLayautProfile from "../layout/RightLayautProfile"
import Posts from "../stories/Posts";

export default function Profile() {
    return (
        <div id="profile">
            <LeftLayout />
            <div id="div_posts_name_profile">

                <h1>Nombre Completo</h1>

                <div id="div_posts_profile">
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
            </div>
            <RightLayautProfile />
        </div>
    )
}