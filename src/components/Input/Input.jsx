import React from 'react';

import Icon from '../assets/send.png'
import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <span className="sendButton" onClick={e => sendMessage(e)}><img src={Icon} alt="..." /></span>
  </form>
)

export default Input; 