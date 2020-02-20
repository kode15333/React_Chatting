import React, { Component } from "react";
import CreatMessage from "./CreatMessage";
import MessageList from "./MessageList";

class Chat extends Component {
    render() {
        const { socket, messages } = this.props;
        return (
            <div>
                <li className="chat page">
                    <MessageList messages={messages} />
                    <CreatMessage socket={socket} />
                </li>
            </div>
        );
    }
}

export default Chat;
