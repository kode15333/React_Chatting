import React, { Component } from "react";
import MessageItem from "./MessageItem";

class MessageList extends Component {
    render() {
        const {messages } = this.props;
        return (
            <div className="chatArea">
                <ul className="messages">
                {messages.map((m,i) => (
                    <MessageItem
                        key={i}
                        nickname={m.nickname}
                        text={m.text}
                    />
                ))}
                </ul>
            </div>
        );
    }
}

export default MessageList;
