import React from 'react';
import styled from 'styled-components';

const ErrorMessageDiv = styled.div`
    color: red;
    font-size: 0.9rem;
    margin-left: 10px;
    margin-top: 5px;
`;

const ErrorMessage = ({message}) => {
    return (
        <ErrorMessageDiv>
            {message}
        </ErrorMessageDiv>
    )
}

export default ErrorMessage;
