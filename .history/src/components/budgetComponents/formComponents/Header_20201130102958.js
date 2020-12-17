import React from 'react';
import styled from 'styled-components';

const TitleH1 = styled.h1`
    border-bottom: 1px solid rgba(127, 5, 80, 0.3);
    font-family: "Montserrat", sans-serif;
    font-size: 1.1rem;
    font-weight: 200;
    padding: 10px;
    text-align: center;
`;

const Header = ({ title} ) => {
    return (
        <TitleH1>
            {title}
        </TitleH1>
    )
}

export default Header;
