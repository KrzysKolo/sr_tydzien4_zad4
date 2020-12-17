import React from 'react';
import styled from 'styled-components';
import ErrorMessage from './ErrorMessage';

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
    font-size: 1.1rem;
`;
const inputStyles = (error, touched) => `
    padding: 5px 6px;
    border: 1px solid ${error && touched ? '#d3170d' : 'rgba(127, 5, 80, 0.8)'};
    border-radius: 5px;
    font-family: inherit;
    font-size: 1rem;
`;
const InputContainer = styled.input`
    ${props => inputStyles(props.error && props.touched)}
`;
const Input = (props) => {
    const { label, name, message, error, touched} = props;
    return (
        <InputWrapper>
                <InputLabel htmlFor={name}>{label}:</InputLabel>
                <InputContainer {...props} id={name} />
                { error && touched && <ErrorMessage message={message}/>}
        </InputWrapper>
    )
}

export default Input;
