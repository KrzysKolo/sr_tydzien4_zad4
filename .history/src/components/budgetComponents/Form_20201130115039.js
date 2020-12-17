import React from 'react';
import Header from './formComponents/Header';
import Input from './formComponents/Input';
import Select from './formComponents/Select';
import styled from 'styled-components';
import SelectOptions from './../data/SelectOptions';
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
            <Input type="text" label="Nazwa transakcji" name="name" placeholder="nazwa transakcji..." error={"aaaa"} message={"medss"} />
            <Input type="text" label="Kwota transakcji" name="kwota" placeholder="kwota..." error={"aaaa"} message={"medss"} />
            <Select option={SelectOptions} label="Wybierz kategorię transakcji" name="select" />
        </FormWrapper>
    )
}

export default Form;
