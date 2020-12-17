import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
`;
const DivWrapper = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 2fr 1fr 0.5fr;
    width: 100%;
    margin: 5px 0;
`;
const NameH3 = styled.h3`
    font-size: 1.1rem;
    font-weight: 600;
    text-align: left;
`;
const AmountSpan = styled.span`
    font-size: 1rem;
    text-align: right;

`;
const DivData = ({data}) => {
    return (
        <Container>
            {data.map(item => (<DivWrapper key={item.id}><p>ico</p> <NameH3>{item.name}</NameH3><AmountSpan>{item.amount}zł</AmountSpan><p>x</p></DivWrapper>)) }
        </Container>
    )
}

export default DivData;
