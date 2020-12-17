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
`;
const AmountSpan = styled.span`
    font-size: 1rem;
`;
const DivData = ({data}) => {
    return (
        <Container>
            {data.map(item => (<DivWrapper key={item.id}> <NameH3>{item.name}</NameH3><AmountH3>{item.amount}zł</AmountH3> </DivWrapper>)) }
        </Container>
    )
}

export default DivData;
