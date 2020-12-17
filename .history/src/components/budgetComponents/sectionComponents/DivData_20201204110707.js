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
    width: 100%;
    padding: 5px 0;
`;
const NameH3 = styled.h3`
    font-size: 1.2rem;
    text-align: left;
`;
const AmountSpan = styled.span`
    font-size: 1rem;
    text-align: right;
`;
const DivData = ({data}) => {
    return (
        <Container>
            {data.map(item => (<DivWrapper key={item.id}> <NameH3>{item.name}</NameH3><AmountSpan>{item.amount}zł</AmountSpan> </DivWrapper>)) }
        </Container>
    )
}

export default DivData;
