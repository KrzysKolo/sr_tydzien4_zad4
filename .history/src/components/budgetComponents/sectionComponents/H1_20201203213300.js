import React from 'react'
import styled from 'styled-components';

const TitleH1Styles = (title) => `
border-bottom: 1px solid #ccc;
color: ${title => (title==="Przychód") ? 'green' : 'red'};
margin-bottom: 2rem;
padding-bottom: 10px;
display: block;
width: 100%;
text-align: center;
`;
const TitleH1 = styled.h1`
      ${props => TitleH1Styles(props.title)}
`;

const H1 = (props) => {
    const { title } = props;
    return (
        <TitleH1>
            {title}:
        </TitleH1>
    )
}

export default H1;
