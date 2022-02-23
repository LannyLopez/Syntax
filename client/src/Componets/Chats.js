import React from 'react'
import Chat from './Chat';
function Chats(){

    return(
       <div className='chats'>
           <Chat
           name="Elon"
           message="Come work for Tesla please👁👄👁"
           timestamp="55 Minutes ago"
           profilePic="" />
       </div>
    )
}

export default Chats;