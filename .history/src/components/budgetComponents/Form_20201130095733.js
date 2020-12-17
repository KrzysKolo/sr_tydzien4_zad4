import React from 'react';
import styled, { createGlobalStyle }from 'styled-components';

const FormWrapper = styled.form`
    background-color: #ccc;
    color: rgb(127, 5, 80)
    border: 2px double rgb(127, 5, 80);
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
