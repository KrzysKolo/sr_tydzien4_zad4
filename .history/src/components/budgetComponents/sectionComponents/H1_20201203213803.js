import React from 'react'
import styled from 'styled-components';

const TitleH1Styles = (label) => `
border-bottom: 1px solid #ccc;
color: ${label ? 'green' : 'red'};
margin-bottom: 2rem;
padding-bottom: 10px;
display: block;
width: 100%;
text-align: center;
`;
const TitleH1 = styled.h1`
      ${props => TitleH1Styles(props.label)}
`;

const H1 = (props) => {
    const { title, label } = props;
    return (
        <TitleH1 label={label}>
            {title}:
        </TitleH1>
    )
}

export default H1;
