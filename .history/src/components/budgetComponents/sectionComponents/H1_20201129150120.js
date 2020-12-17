import React from 'react'
import styled from 'styled-components';

const TitleH1 = styled.h1`
    border-bottom: 1px solid #ccc;
    color: green;
    margin-bottom: 2rem;
    padding-bottom: 10px;
    display: block;
    width: 100%;

const H1 = ({title, label}) => {
    return (
        <TitleH1>
            {title}:
        </TitleH1>
    )
}

export default H1;
