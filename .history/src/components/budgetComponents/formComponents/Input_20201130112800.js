import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: #14161f;
    font-family: "Montserrat", sans-serif;
    padding: 5px;
    margin: 10px 0;
`;
const InputLabel = styled.label`
    padding-bottom: 5px;
`;
const InputContainer = styled.input`
    border: 1px solid rgba(127, 5, 80, 0.5);
    border-radius: 5px;
    font-size: 1rem;
    padding: 5px 6px;
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
