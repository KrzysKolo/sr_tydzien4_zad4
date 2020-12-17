import React from 'react';
import styled from 'styled-components';

const InfoP = styled.p`
    color: rgb(127, 5, 80);
    font-size: 2rem;
    font-weight: bold;
    width: 100%auto;
    text-align: center;
    padding-bottom: 2rem;
`;

const P = ({total}) => {
    return (
        <InfoP>
            {total}zł
        </InfoP>
    )
}

export default P;
