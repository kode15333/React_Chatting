import React, { Component } from 'react';

class MessageItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.text !== this.props.text;
    }
    
    render() {
        const {nickname, text} = this.props;
        return (
          
                <li>
                    {text === '퇴장' ? (nickname + "님이 퇴장하셨습니다. ") : ((text === '입장' ? (nickname + "님이 입장하셨습니다. ") : (nickname + " : " + text)))}
                </li>
           
        );
    }
}

export default MessageItem;