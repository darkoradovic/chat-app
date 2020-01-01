import React from 'react'
import styled from 'styled-components'

const Cred = () => {
    return (
        <Wrap>
            <p>Powered by Darko Radovic</p>
        </Wrap>
    )
}

export default Cred


const Wrap = styled.div`
    background-color: #2979FF;
    height: 2rem;
    display: flex;
    justify-content: flex-end;

    p{
        margin: 7px 0;
        font-size: 0.8rem;
        color: #fff;
        margin-right: 10px;
    }
`