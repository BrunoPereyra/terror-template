import React, { useState } from "react";
import LeftLayout from "../layout/LeftLayout";
import "../../static/styles/NewStory.css";

export default function NewStory() {
  const [Textarea, setTextarea] = useState({
    inputText: "",
    Textarea_new_story: ""
  });

  function HandleSubmit(e) {
    e.preventDefault()
    if (((typeof (Textarea.inputText) == "string") && (Textarea.inputText.length >= 5)) &&
      ((typeof (Textarea.Textarea_new_story)) && (Textarea.Textarea_new_story.length >= 5))) {

      window.localStorage.setItem(
        "NewStory", JSON.stringify(Textarea)
      )
      setTextarea({
        inputText: "",
        Textarea_new_story: ""
      });

    }
  }

  function HandleChange(e) {
    setTextarea({
      ...Textarea,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div id="create_new_story">
      <div id="LeftLayout_create_new_story">
        <LeftLayout />
      </div>
      <div id="new_story">
        <form id="form_make_history" onSubmit={HandleSubmit}>
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
              id="writeText_createStory"
              value={Textarea.Textarea_new_story}
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
