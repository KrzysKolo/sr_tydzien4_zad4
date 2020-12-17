import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;
const InputLabel = styled.label`
    color: pink;
`;
const Input = (props) => {
    const { label, name } = props;
    return (
        <InputWrapper>
            <InputLabel>{label}</InputLabel>

        </InputWrapper>
    )
}

export default Input;
