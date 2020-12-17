import React from 'react';
import styled, { createGlobalStyle }from 'styled-components';

const FormWrapper = styled.form`
    background-color: rgb(127, 5, 80);
    border: 2px double yellow;
    width: 20vw;
    height: 20vw;
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
