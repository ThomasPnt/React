import React, { Component } from 'react';
import './App.css';
import MessageList from './MessageList.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                { body: "Connecting..." },
                { author: "You", body: "Hello!", me: true },
                { author: "Them", body: "Hey there!"  },
            ],
        }
    }

    render() {
    return (
      <div className="App">
        <MessageList messages={this.state.messages}/>
      </div>
    );
  }
}

export default App;
