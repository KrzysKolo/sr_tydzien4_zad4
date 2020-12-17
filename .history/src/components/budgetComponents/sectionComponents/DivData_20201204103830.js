import React from 'react';
import styled from 'styled-components';

const DivWrapper = styled.div`
    background: pink;
`;
const DivData = ({data}) => {
    return (
        <DivWrapper>
            {data.map(item => (<div key={item.id}> {item.name} {item.amount}zł </div>)) }
        </DivWrapper>
    )
}

export default DivData;
