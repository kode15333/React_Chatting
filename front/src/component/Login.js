import React, { Component } from 'react';

class Login extends Component {
    state = {
        nickname : ''
    }
    handleChange = (e) => {
        this.setState({
            nickname : e.target.value
        })
    }
    handleKeyPress = e => {
        const {socket, onlogindisplay} = this.props;
        if(e.charCode === 13){
            socket.emit('user join', {
                nickname : this.state.nickname
            })
            this.setState({
                nickname : ''
            })
            onlogindisplay()
        }
    }
    render() {
        return (
            <div>
                 <li className="login page">
                        <div className="form">
                            <h3 className="title">What's your nickname?</h3>
                            <input className="usernameInput" value={this.state.nickname} onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
                        </div>
                    </li>
            </div>
        );
    }
}

export default Login;