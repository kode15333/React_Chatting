import React, { Component } from 'react';

class MessageItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.text !== this.props.text;
    }
    
    render() {
        const {nickname, text} = this.props;
        return (
          
                <li>
                    {text === ' ' ? (nickname + '님이 입장하셨습니다.') : (nickname + " : " + text)}
                </li>
           
        );
    }
}

export default MessageItem;