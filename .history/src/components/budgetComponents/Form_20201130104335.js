import React from 'react';
import Header from './formComponents/Header';
import styled, { createGlobalStyle }from 'styled-components';
import { faBusinessTime} from '@fortawesome/free-solid-svg-icons';

const FormWrapper = styled.form`
    background-color: #f9f9f9;
    border: 4px double rgb(127, 5, 80);
    border-radius: 10px;
    box-shadow: 3px 3px 5px rgba(127, 5, 80, 0.5);
    color: rgb(127, 5, 80);
    height: 40vw;
    margin: 0 auto;
    padding: 10px;
    width: 30vw;
`;

const Form = () => {
    return (
        <FormWrapper>
            <Header icons={faBusinessTime} title={"Dodaj transakcje!"} />
        </FormWrapper>
    )
}

export default Form;
