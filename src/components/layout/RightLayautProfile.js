import React from "react";
import { Avatar } from '@mui/material';
import "../../static/styles/RightLayautProfile.css"

export default function RightLayautProfile() {
    return (
        <div id="RightLayautProfile">
            <div id="user_img_fullnama_RightLayautProfile">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRto2zoJc2S8H9wzd7FfEBK7icg8LjiLoahvA&usqp=CAU" alt="avatar" width="86"/>
                <h1>nombre completo</h1>
            </div>
          
             <div id="data_follow_RightLayautProfile">
                <span id="follow_RightLayautProfile">seguir</span>
                <span id="follow_count_RightLayautProfile">seguidores 14k</span>
             </div>
          
            <div id="information_about_user_RightLayautProfile">
              <p>
                esta es info sobre el usuario esta es info sobre el usuario 
                esta es info sobre el usuario esta es info sobre el usuario
                esta es info sobre el usuario esta es info sobre el usuario
                esta es info sobre el usuario esta es info sobre el usuario 
              </p>
            </div>
        </div>
    )
}