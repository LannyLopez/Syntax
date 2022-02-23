import React, { useState } from "react";
import "../assets/chatScreen.css"
import { Avatar } from "@mui/material";
function ChatScreen () {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([
        {
            name: "Sally",
            image:'',
            message: 'meow meow meow 👁👄👁'
        },
        {
            name: "Sally",
            image: '',
            message:'meow meow meow' 
        },
        {
            message:'meow meow meow' 
        },
    ])
    const handleSend = e =>{
        e.preventDefault();

        setMessages([...messages, {message: input }]);
        setInput("");
    }
    return(


        <div className="chatScreen">
            <p className="chatScreen__timestamp">You matched with Sally 2/22/2022</p>
            {messages.map((message) =>(
                message.name ? (
                <div className="chatScreen__message">
                    <Avatar
                    className="chatScreen__image"
                    alt={message.name}
                    src={message.image} />
                    <p className="chatScreen__text">{message.message}</p>
                </div>

                ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )
            ))}
        
            <form className="chatScreen__input">
                <input type="text" className="chatScreen__inputField" placeholder="Type a Message..." value={input} onChange={(e)=> setInput(e.target.value)}></input>
                <button className="chatScreen__button" onClick={handleSend} type="submit">SEND</button>
            </form>
        
        </div>
    )
}

export default ChatScreen;