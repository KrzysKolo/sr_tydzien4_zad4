import React from 'react';
import styled, { createGlobalStyle }from 'styled-components';

const FormWrapper = styled.form`
    background-color: #ccc;
    color: rgb(127, 5, 80);
    border: 4px double rgb(127, 5, 80);
    border-radius: 10px;
    width: 30vw;
    height: 40vw;
    margin: 0 auto;
`;

const Form = () => {
    return (
        <FormWrapper>
            Formularz
        </FormWrapper>
    )
}

export default Form;
