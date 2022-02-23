import React from "react";
import { Avatar } from "@mui/material";
import "../assets/Chats.css"
import { Link } from "react-router-dom";

function Chat({name, message, profilePic, timestamp}){
return(
    <Link to={`/chat/${name}`}>
    <div className="Chat">
        <Avatar className="chat__image" alt={name} src={profilePic} />
        <div className="chat__details">
            <h2> {name} </h2>
            <p>{message}</p>
        </div>
        <p className="chat__timestamp">{timestamp}</p>
    </div>
    </Link>
)
};

export default Chat;