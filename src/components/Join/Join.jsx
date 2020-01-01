import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <Link to="/info" className="info"><ion-icon name="information-circle-outline"></ion-icon></Link>
        <h1 className="heading">Join</h1>
        <div>
          <input
            placeholder="Name"
            id="name"
            className="form__input"
            type="text"
            onChange={e => setName(e.target.value)}
          />
          <label htmlFor="name" className="form__label">Name</label>
        </div>
        <div>
          <input
            placeholder="Chat Room"
            id="room"
            className="form__input"
            type="text"
            onChange={e => setRoom(e.target.value)}
          />
          <label htmlFor="room" className="form__label">Chat Room</label>
        </div>
        <Link
          onClick={e => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="button mt-20" type="submit">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
