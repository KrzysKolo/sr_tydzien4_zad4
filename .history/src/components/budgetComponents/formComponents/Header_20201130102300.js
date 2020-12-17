import React from 'react';
import styled from 'styled-components';

const TitleH1 = styled.h1`
`;

const Header = ({ title} ) => {
    return (
        <TitleH1>
            {title}
        </TitleH1>
    )
}

export default Header;
