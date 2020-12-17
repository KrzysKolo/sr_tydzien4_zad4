import React from 'react'
import styled from 'styled-components';

const TitleH1 = styled.h1`
    border-bottom: 1px solid #ccc;
    color: ${props => props.label ? 'red' : 'green'};
    margin-bottom: 2rem;
    padding-bottom: 10px;
`;

const H1 = (props) => {
    return (
        <TitleH1>
            {props.title}:
        </TitleH1>
    )
}

export default H1;
