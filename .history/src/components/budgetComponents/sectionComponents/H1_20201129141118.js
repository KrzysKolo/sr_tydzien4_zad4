import React from 'react'
import styled from 'styled-components';

const TitleH1 = styled.h1`
    color: rgb(19, 147, 72);
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
