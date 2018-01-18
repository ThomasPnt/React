import React from 'react';
import './App.css';
import {fadeIn} from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
    fadeIn: {
        animation: 'x 1s',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    }
}

const Message = ({chat, user}) => (
    <StyleRoot>
        <li className={`chat ${user === chat.username ? "right" : "left"}`} style={styles.fadeIn}>
            {user !== chat.username
            && <img src={chat.img} alt={`${chat.username}'s profile pic`}/>
            }
            {chat.content}
        </li>
    </StyleRoot>
);

export default Message;