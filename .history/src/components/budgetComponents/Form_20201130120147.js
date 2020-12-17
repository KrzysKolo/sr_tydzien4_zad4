import React from 'react';
import Header from './formComponents/Header';
import Input from './formComponents/Input';
import Select from './formComponents/Select';
import Button from './buttons/Button';
import styled from 'styled-components';
import SelectOptions from './../data/SelectOptions';
import { faBusinessTime, faSave, faWindowClose } from '@fortawesome/free-solid-svg-icons';

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
const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 auto;
`;
const Form = () => {
    return (
        <FormWrapper>
            <Header icons={faBusinessTime} title={"Dodaj transakcje!"} />
            <Input type="text" label="Nazwa transakcji" name="name" placeholder="nazwa transakcji..." error={"aaaa"} message={"medss"} />
            <Input type="text" label="Kwota transakcji" name="kwota" placeholder="kwota..." error={"aaaa"} message={"medss"} />
            <Select options={SelectOptions} label="Wybierz kategorię transakcji" name="select" />
            <ButtonWrapper>
                <Button title="Zapisz" icons={faSave} type="save" />
                <Button title="Anuluj" icons={faWindowClose} type="cancel" />
            </ButtonWrapper>
        </FormWrapper>
    )
}

export default Form;
