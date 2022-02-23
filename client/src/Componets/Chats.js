import React from 'react'
import Chat from './Chat';
function Chats(){

    return(
       <div className='chats'>
           <Chat
           name="Sally"
           message="Meow Meow Meow"
           timestamp="55 Minutes ago"
           profilePic="" />
       </div>
    )
}

export default Chats;