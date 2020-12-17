import React from 'react';
import styled, { createGlobalStyle }from 'styled-components';

const FormWrapper = styled.form`
    background-color: red;
    border: 2px double yellow;
`;

const Form = () => {
    return (
        <FormWrapper>
            Formularz
        </FormWrapper>
    )
}

export default Form;
