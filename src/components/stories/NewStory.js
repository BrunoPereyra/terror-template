import React, { useState } from "react";
// import { Avatar } from "@mui/material";
import "../../static/styles/NewStory.css";

export default function NewStory() {

  const [Textarea, setTextarea] = useState({
    inputText: "",
  });
  function HandleChange(e) {
    setTextarea({
      ...Textarea,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div>

      <div id="new_story">
        <form id="form_make_history">
          <div className="div_new_story">
            <input
              name="inputText"
              id="inputText"
              value={Textarea.inputText}
              placeholder="Title"
              autoCapitalize="none"
              autoFocus={true}
              onChange={HandleChange}
            />
          </div>
          <div className="div_new_story">
            <textarea
              name="Textarea_new_story"
              id="writeText"
              value={Textarea.inputText}
              placeholder="Tell your story..."
              autoCapitalize="none"
              onChange={HandleChange}
            />
          </div>
          <button className="writeSubmit" type="submit">
            Publish
          </button>
        </form>
      </div>
    </div>
  );
}
