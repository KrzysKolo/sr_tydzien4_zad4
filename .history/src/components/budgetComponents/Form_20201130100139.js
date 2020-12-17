import React from 'react';
import styled, { createGlobalStyle }from 'styled-components';

const FormWrapper = styled.form`
    background-color: #f9f9f9;
    color: rgb(127, 5, 80);
    border: 4px double rgb(127, 5, 80);
    border-radius: 10px;
    box-shadow: 3px 3px 5px rgba(127, 5, 80, 0.5);
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
