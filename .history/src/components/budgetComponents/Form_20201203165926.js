import React, { useState } from 'react';
import { Header, Input, Select } from './formComponents/';
import Button from './buttons/Button';
import styled from 'styled-components';
import SelectOptions from './../data/SelectOptions';
import { faBusinessTime, faSave, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { useFormik } from 'formik';
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

const FormData = () => {
    const initialValues  = {
        name: '',
        amount: '',
        category: -1,
    };
    const validationSchema = yup.object({
        name: yup.string().required("Required").min(3, "Musi być min 3 znaki").max(50,"Moze być max 50 znaków"),
        amount: yup.number().required("Required").min(1, "Musi być conajmniej 1 cyfra"),
        category: yup.number().required("Musi być wybrane").min(0, ).max(5),
    })
    const onSubmit = ( values, {resetForm} ) => {
        console.log('Form data', values);
        setShowMessage(true);
        resetForm();
    };
    const [ showMessage, setShowMessage ] = useState(false);
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });
    return (
        <>
        <FormWrapper onSubmit={formik.handleSubmit}>
            <Header icons={faBusinessTime} title={"Dodaj transakcje!"} />
            <Input type="text" label="Nazwa transakcji" name="name" placeholder="nazwa transakcji..." onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} error={formik.errors.name} message={formik.errors.name} touched={formik.touched.name} />
            <Input type="text" label="Kwota transakcji" name="amount" placeholder="kwota..." onChange={formik.handleChange} value={formik.values.amount} onBlur={formik.handleBlur} error={formik.errors.amount} message={formik.errors.amount} touched={formik.touched.amount}/>
            <Select options={SelectOptions} label="Wybierz kategorię transakcji" name="category" onChange={formik.handleChange} value={formik.values.category} onBlur={formik.handleBlur} error={formik.errors.category} message={formik.errors.category} touched={formik.touched.category}/>
            <ButtonWrapper>
                <Button type="save" title="Zapisz" icons={faSave}/>
                <Button title="Anuluj" icons={faWindowClose} type="cancel" />
            </ButtonWrapper>
        </FormWrapper>

        </>
    )
}

export default FormData;
