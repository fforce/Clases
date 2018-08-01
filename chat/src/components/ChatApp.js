import React from 'react'
import Login from "./Login"
import ChatRoom from "./ChatRoom"

const ChatApp = ({ viewChatRoom , submitForm}) =>(
  <div>
    viewChatRoom ?<Login />: <ChatRoom/>
  </div>
)
export default ChatApp
//view chatroom puede ser prop y no parte del state