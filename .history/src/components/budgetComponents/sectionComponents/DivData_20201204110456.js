import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background: pink;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
`;
const DivWrapper = styled.div`
    color: navy;
    display: grid;
    grid-template-columns: 2fr 1fr;
    border: 1px solid red;
    width: 100%;
`;
const NameH3 = styled.h3`
    border: 1px solid green;
    font-size: 1.2rem;
    display: block;
    text-align: left;
    max-width: 500px;

`;
const AmountSpan = styled.span`
    font-size: 1rem;
    text-align: right;
    display: inline-block;
`;
const DivData = ({data}) => {
    return (
        <Container>
            {data.map(item => (<DivWrapper key={item.id}> <NameH3>{item.name}</NameH3><AmountSpan>{item.amount}zł</AmountSpan> </DivWrapper>)) }
        </Container>
    )
}

export default DivData;
