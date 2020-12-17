import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ButtonDiv = styled.button`
    border: 1px solid red;
    padding: 10px 15px;
    display: flex;
    flex-direction: row;
`;
const Button = ({ title, icons }) => {
    return (
        <ButtonDiv>
            <FontAwesomeIcon icon={icons} />
            <p>asdfgh</p>
        </ButtonDiv>
    )
}

export default Button;
