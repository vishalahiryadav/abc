import React, { useState } from 'react'

function CreatPost() {

    [title, setTitle] = useState("")
    [postText, setPostText] = useState("");

    return (
        <div className="createPostPage">
            <div className="cpContainer">
                <h1>Create A Post</h1>
                <div className="inputGp">
                    <label> Title:</label>
                    <input placeholder="Title..." onChange={(e) => {setTitle(e.target.value)}} />
                </div>
                <div className="inputGp">
                    <label> Post:</label>
                    <textarea placeholder="Post..." onChange={(e) => {setPostText(e.target.value)}} />
                </div>
                <button>Submit post</button>
            </div>
        </div>
    )
}

export default CreatPost