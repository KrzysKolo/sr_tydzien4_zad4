import React from 'react';
import { Header, Input, Select } from './formComponents/';
import Button from './buttons/Button';
import styled from 'styled-components';
import SelectOptions from './../data/SelectOptions';
import { faBusinessTime, faSave, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { useFormik } from 'formik';

const FormWrapper = styled.form`
    background-color: #f9f9f9;
    border: 4px double rgb(127, 5, 80);
    border-radius: 10px;
    box-shadow: 3px 3px 5px rgba(127, 5, 80, 0.5);
    color: rgb(127, 5, 80);
    margin: 0 auto;
    padding: 10px;
    width: 30vw;
`;
const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    border-top: 1px solid rgba(127, 5, 80, 0.3);
    padding-top: 10px;
    margin-top: 1.4rem;
`;
const Form = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            amount: '',
            category:'',
        },

    });
    return (
        <FormWrapper onSubmit={formik.handleSubmit}>
            <Header icons={faBusinessTime} title={"Dodaj transakcje!"} />
            <Input type="text" label="Nazwa transakcji" values={formik.values.name} onChange={formik.handleChange} placeholder="nazwa transakcji..." error={"aaaa"} message={"input1"} />
            <Input type="text" label="Kwota transakcji" values={formik.values.amount} placeholder="kwota..." />
            <Select options={SelectOptions} label="Wybierz kategorię transakcji" values={formik.values.category} error={"aaaa"} message={"select"} />
            <ButtonWrapper>
                <Button title="Zapisz" icons={faSave} type="save" />
                <Button title="Anuluj" icons={faWindowClose} type="cancel" />
            </ButtonWrapper>
        </FormWrapper>
    )
}

export default Form;
