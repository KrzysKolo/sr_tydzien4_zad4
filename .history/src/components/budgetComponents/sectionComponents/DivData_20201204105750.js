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
`;
const NameSpan = styled.span`
    font-size: 1.2rem;
    display: inline-block;
    width: 60%;
    text-align: left;
    border: 1px solid green;
`;
const AmountSpan = styled.span`
    font-size: 1rem;
    text-align: right;
`;
const DivData = ({data}) => {
    return (
        <Container>
            {data.map(item => (<DivWrapper key={item.id}> <NameSpan>{item.name}</NameSpan><AmountSpan>{item.amount}zł</AmountSpan> </DivWrapper>)) }
        </Container>
    )
}

export default DivData;
