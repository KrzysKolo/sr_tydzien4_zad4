import React from 'react';
import styled from 'styled-components';

const DivWrapper = styled.div`
    background: pink;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;
const DivData = ({data}) => {
    return (
        <DivWrapper>
            {data.map(item => (<div key={item.id}> {item.name} {item.amount}zł </div>)) }
        </DivWrapper>
    )
}

export default DivData;
