import React from 'react'
import styled from 'styled-components';

const TitleH1 = styled.h1`
    color: ${props => props.label ? 'rgb(19, 147, 100)' : 'rgb(204, 4, 4)'};
    margin-bottom: 2rem;
`;

const H1 = (props) => {
    return (
        <TitleH1>
            {props.title}:
        </TitleH1>
    )
}

export default H1;
