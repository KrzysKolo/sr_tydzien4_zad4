import React from 'react'
import styled from 'styled-components';

const TitleH1 = styled.h1`
    color: ${title => {"Przychód"} ? 'rgb(13, 145, 105)' : 'rgb(204, 4, 4)'};
    margin-bottom: 2rem;
`;

const H1 = ({title}) => {
    return (
        <TitleH1>
            {title}:
        </TitleH1>
    )
}

export default H1;
