import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 5px;
    margin: 10px 0;
`;
const InputLabel = styled.label`
    color: pink;
`;
const InputContainer = styled.input`
`;
const Input = (props) => {
    const { label, name } = props;
    return (
        <InputWrapper>
            <InputLabel>{label}</InputLabel>
            <InputContainer {...props} id={name} />

        </InputWrapper>
    )
}

export default Input;
