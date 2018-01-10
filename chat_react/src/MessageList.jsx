import React from 'react';
import './MessageList.css';

export default class MessageList extends React.Component {

    render() {
        return (
            <div className="MessageList">
                {this.props.messages.map((message, i) => (
                    <div>
                        {message.author && (
                            <span className="author">{message.author}:</span>
                        )}
                        {message.body}
                    </div>
                ))}
            </div>
        )
    }
}