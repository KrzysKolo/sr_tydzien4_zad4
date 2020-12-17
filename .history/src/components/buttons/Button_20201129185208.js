import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ButtonDiv = styled.button`
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px 15px;
    display: flex;
    flex-direction: row;
    color: rgb(127, 5, 80);
    font-size: 0.9rem;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    &:hover {
        border: 2px solid rgba(127, 5, 80, 0.3);
        color: rgba(127, 5, 80, 0.5);
    }
`;
const ButtobDiv = styled.div`
    margin-left: 10px;
    color: #14161f;
`;
const Button = ({ title, icons }) => {
    return (
        <ButtonDiv>
            <FontAwesomeIcon icon={icons} />
            <ButtobDiv>{title}</ButtobDiv>
        </ButtonDiv>
    )
}

export default Button;
