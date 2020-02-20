import React, { Component } from "react";
import "./App.css";
import Login from "./component/Login";
import Chat from "./component/Chat";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            endPint: "http://127.0.0.1:4001",
            messages: [],
            socket: this.props.socketIO,
            loginStatus: true,
        };
    }

    componentDidMount() {
        const socket = require("socket.io-client")(this.state.endPint);
        socket.on("outgoing data", data => {
            this.setState({ 
                messages : this.state.messages.concat({
                    nickname : data.nickname,
                    text : data.message,
                })
             });
        });
        socket.on("user joined", data => {
            this.setState({
                 messages : this.state.messages.concat({
                    nickname : data.nickname,
                    text : '입장',
                })
             });
        });
        socket.on("user out", data => {
            if(data.nickname){
                this.setState({
                     messages : this.state.messages.concat({
                        nickname : data.nickname,
                        text : '퇴장',
                    })
                 });
            }
        });
    }

    handleChange = e => {
        this.props.socketIO.emit("hello", { num: e.target.value });
    };
    handleLoginDisplay = () => {
        this.setState({
            loginStatus: !this.state.loginStatus
        });
    };
    render() {
        const {loginStatus, messages, socket} = this.state
        return (
            <div>
                <ul className="pages">
                    {loginStatus? (
                        <Login
                            socket={socket}
                            onlogindisplay={this.handleLoginDisplay}
                        />
                    ) : (
                        <Chat socket={socket} messages={messages} />
                    )}
                </ul>
            </div>
        );
    }
}

export default App;
