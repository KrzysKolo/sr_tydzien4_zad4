import React from 'react'
import styled from 'styled-components';

const TitleH2 = styled.h2`
    font-weight: 200;
    margin-bottom: 2rem;
    padding-bottom: 10px;
`;

const H2 = ({title}) => {
    return (
        <TitleH2>
            {title}:
        </TitleH2>
    )
}

export default H2;
