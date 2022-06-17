import React from "react";
import "../../static/styles/RightLayoutHome.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function RightLayoutHome() {
    return (
        <div id="right_layout_home">
            <div id="search_layout_home">
                <SearchOutlinedIcon id="SearchOutlinedIcon"/>
                <input
                    id="search_input_right_layout_home"
                    type="text"
                    placeholder="Busqueda"
                />
            </div>
        </div>
    )
}