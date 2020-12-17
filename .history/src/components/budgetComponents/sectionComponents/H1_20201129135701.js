import React from 'react'
import styled from 'styled-components';

const TitleH1 = styled.h1`
    color: ${label => label ? 'rgb(13, 145, 105)' : 'rgb(204, 4, 4)'};
    margin-bottom: 2rem;
`;

const H1 = ({title, label}) => {
    return (
        <TitleH1>
            {title}:
        </TitleH1>
    )
}

export default H1;
