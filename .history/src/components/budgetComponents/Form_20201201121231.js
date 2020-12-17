import React, { useState } from 'react';
import { Header, Input, Select } from './formComponents/';
import Button from './buttons/Button';
import styled from 'styled-components';
import SelectOptions from './../data/SelectOptions';
import { faBusinessTime, faSave, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { Formik } from 'formik';
import * as yup from 'yup';

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
    const [ showMessage, setShowMessage ] = useState(false);
    const initialValues = {
            name: '',
            amount: '',
            category:'',
        };
    const validationSchema = () => yup.object({
            name: yup.string().required("Wymagane").max(100),
            amount: yup.number("Musi być liczbą").required("Wymagane").min(1).max(100),
            category: yup.number().min(0,"Wskaż kategorię").max(5),
        });
    const onSubmit = ( values, { restForm }) => {
            setShowMessage(true);
            console.log(values);
            validationSchema();
            restForm();
        },
    });

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
        {( {formik, values, errors}) => (
        <FormWrapper onSubmit={formik.handleSubmit}>
            <Header icons={faBusinessTime} title={"Dodaj transakcje!"} />
            <Input type="text" label="Nazwa transakcji" name="name" values={formik.values.name} onChange={formik.handleChange} placeholder="nazwa transakcji..." error={"aaaa"} message={this.validationSchema.name} />
            <Input type="text" label="Kwota transakcji" name="amount" values={formik.values.amount} onChange={formik.handleChange}  placeholder="kwota..." />
            <Select options={SelectOptions} label="Wybierz kategorię transakcji" name="category" values={formik.values.category} onChange={formik.handleChange}  error={"aaaa"} message={"select"} />
            <ButtonWrapper>
                <Button type="save" title="Zapisz" icons={faSave}/>
                <Button title="Anuluj" icons={faWindowClose} type="cancel" />
            </ButtonWrapper>
            { showMessage && <p>ok</p>}

        </FormWrapper>
        {JSON.stringify(values, null, 2)}
        {JSON.stringify(errors, null, 2)}
        )}
        </Formik>
    )
}

export default Form;
