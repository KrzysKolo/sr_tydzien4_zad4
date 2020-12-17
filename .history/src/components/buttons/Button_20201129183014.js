import React from 'react';
import styled from 'styled-components';

const ButtonDiv = styled.div`
    border: 1px solid red;
    padding: 10px 15px;
`;
const Btn = styled.button`
    padding: 12px 20px;
    color: pink;
    border: 1px solid navy;
    border-radius: 5px;
    background: none;
    cursor: pointer;
    transition: color 0.3s, background-color 0.3s;
    `;
const Button = () => {
    return (
        <ButtonDiv>

        </ButtonDiv>
    )
}

export default Button;
