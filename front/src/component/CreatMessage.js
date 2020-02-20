import React, { Component } from "react";

class CreatMessage extends Component {
    state = {
        text : ''
    }
    handleChange = (e) => {
        this.setState({
            text : e.target.value
        })
    }
    handleKeyPress = e => {
        const {socket} = this.props;
        if(e.charCode === 13){
            socket.emit('incoming data', {
                text : this.state.text
            })
            this.setState({
                text : ''
            })
        }
    }

    render() {
        return (
            <div>
                <input className="inputMessage" value={this.state.text} placeholder="Type here..." onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
            </div>
        );
    }
}

export default CreatMessage;
