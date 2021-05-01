import React from "react";


const Chat = (props) => {
    return props.messages.map((message_info,ind) => {
        let [message, type] = message_info;
        let cname = "henry bubble";
        if(type === 1){
            cname = "user bubble";
        }
        return <div className={cname} key={`message${ind}`}>{message}</div>
    })
}


export default Chat;