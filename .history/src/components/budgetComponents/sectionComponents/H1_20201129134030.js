import React from 'react'
import styled from 'styled-components';

const TitleH1 = styled.h1`
`;

const H1 = ({title}) => {
    return (
        <TitleH1>
            {title}
        </TitleH1>
    )
}

export default H1;
