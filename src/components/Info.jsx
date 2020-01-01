import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom'

const Info = () => {
  return (
    <Wrapper>
      <h1>About This App:</h1>
      <p>This is a chat application made with React.js , Express.js and Socket.io</p>
      <p>
        <strong>Version: </strong> 1.0.0
      </p>

      <Link className="back" to="/">Back to Join page</Link>
    </Wrapper>
  );
};

export default Info;

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1{
      font-size: 3rem;
  }

  p{
      font-size: 1.5rem;
  }

  p ~ p {
    background-color: #1A1A1D;
    color: #fff;
    width: 100%;
  }

  .back{
      background-color: #1A1A1D;
      color: #fff;
      padding: 15px 20px;
      text-decoration: none;
      border-radius: 10px;
      margin-top: 3rem;
  }
`;
