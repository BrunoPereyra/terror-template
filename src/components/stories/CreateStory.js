import React from "react";
import Post from "../stories/Posts"
import "../../static/styles/CreateStory.css"

export default function CreateStory() {
    return (
        <div id="CreateStory">
            <form id="form_createStory">
                <div id="control_input_CreateStory">
                    <label htmlFor="description_story">agregar una imagen a la historia</label>
                    <input
                        id="img_story"
                        name="img_story"
                        placeholder="imagen of the story"

                    />
                </div>
                <div id="control_input_CreateStory">
                    <label htmlFor="description_story">Descripcion de la historia</label>
                    <textarea
                        id="writeText_createStory"
                        name="description_story"
                        placeholder="description of the story"
                    />
                </div>
                <button className="writeSubmit" type="submit">
                    Publish now
                </button>
            </form>
            <div id="post_CreateStory">
                <span>vista de la historia</span>
                <Post />
            </div>
        </div>
    )
}