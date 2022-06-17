import React, { useState } from "react";
import { Avatar } from "@mui/material";
import "../../static/styles/NewStory.css";

export default function NewStory() {
  const [Textarea, setTextarea] = useState({
    title: 1,
    subtitle: 1,
    vtitle: "",
    vStitle: "",
    ttextTitle: 83,
    ttextSTitle: 83,
  });
  function HandleChange(e) {
    setTextarea({
      ...Textarea,
      [e.target.name]: e.target.value,
    });

    if (Textarea.vtitle.length >= Textarea.ttextTitle) {
      setTextarea({
        ...Textarea,
        ttextTitle: Textarea.ttextTitle + 83,
        title: Textarea.title + 1,
      });
    }
    if (Textarea.vStitle.length >= Textarea.ttextSTitle) {
      setTextarea({
        ...Textarea,
        ttextSTitle: Textarea.ttextSTitle + 83,
        subtitle: Textarea.subtitle + 1,
      });
    }
    console.log(Textarea.ttextTitle, Textarea.title);
  }

  return (
    <div id="new_story">
      <nav id="nav_new_Story">
        <h1 id="icon_App_new_story">icon_App</h1>
        <div id="story_access_new_story">
          <span id="publish_button_new_story">Publish</span>
          <Avatar>B</Avatar>
        </div>
      </nav>
      <div id="make_history">
        <form id="form_make_history">
          <textarea
            name="vtitle"
            id="title"
            value={Textarea.vtitle}
            rows={Textarea.title}
            placeholder="Title"
            autoCapitalize="none"
            onChange={HandleChange}
          />
          <textarea
            name="vStitle"
            id="subtitle"
            value={Textarea.vStitle}
            rows={Textarea.subtitle}
            placeholder="subTitle"
            autoCapitalize="none"
            onChange={HandleChange}
          />
        </form>
      </div>
    </div>
  );
}
