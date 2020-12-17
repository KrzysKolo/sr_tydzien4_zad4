import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TitleH1 = styled.h1`
    border-bottom: 1px solid rgba(127, 5, 80, 0.3);
    display: flex;
    flex-direction: row;
    font-size: 1.4rem;
    padding: 10px;
    text-align: center;
`;
const TitleDiv = styled.div`
    color: green;

    font-family: "Montserrat", sans-serif;
    font-size: 1.3rem;
    font-weight: 600;
`;
const Header = ({ title, icons } ) => {
    return (
        <TitleH1>
            <FontAwesomeIcon icon={icons}/>
            <TitleDiv>{title}</TitleDiv>
        </TitleH1>
    )
}

export default Header;
