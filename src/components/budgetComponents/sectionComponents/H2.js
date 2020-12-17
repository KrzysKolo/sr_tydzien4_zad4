import React from 'react'
import styled from 'styled-components';

const TitleH2 = styled.h2`
    font-weight: 200;
    margin: 2% auto;
    padding: 0.5rem;
`;

const H2 = ({title}) => {
    return (
        <TitleH2>
            {title}:
        </TitleH2>
    )
}

export default H2;
