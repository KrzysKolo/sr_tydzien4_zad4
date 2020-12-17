import React, { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { GlobalContext } from '../context/GlobalState';
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
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 20vw;
    min-width: 300px;
`;
const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    border-top: 1px solid rgba(127, 5, 80, 0.3);
    padding-top: 10px;
    margin-top: 1.4rem;
`;

const FormData = ({ showForm, setShowForm }) => {
    const { addIncome, addExpense } = useContext(GlobalContext);

    const [income, setIncome] = useState({
        amount: "",
        name: "",
        category: 0,
    });
    const [expense, setExpense] = useState({
        amount: "",
        name: "",
        category: -1,
    });
    const initialValues  = {
        name: '',
        amount: '',
        category: -1,
    };
    const validationSchema = yup.object({
        name: yup.string().required("Required").min(3, "Musi być min 3 znaki").max(50,"Moze być max 50 znaków"),
        amount: yup.number().required("Required").min(1, "Musi być conajmniej 1 cyfra"),
        category: yup.number().required("Musi być wybrane").min(0, ).max(8),
    })

    const onSubmit = (values, {resetForm} ) => {
        console.log('Form data', values);
        if(values.category > 0){
            const newExpenseTransaction  = {
                id: uuidv4(),
                name: values.name,
                amount: (values.amount)*1,
                category: (values.category)*1,
            };
            addExpense(newExpenseTransaction );
            setExpense({
                name: '',
                amount: "",
                category: -1,
            });
        }
        else {
            const newIncomeTransaction = {
                id: uuidv4(),
                name: values.name,
                amount: (values.amount)*1,
                category: (values.category)*1,
            };
            addIncome(newIncomeTransaction);
            setIncome({
                name: '',
                amount: "",
                category: -1,
            });
        }
        ;
        resetForm();
    };

    const closeForm = () => {
        setShowForm(false);
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });
    return (
        <>
        { showForm &&
        <FormWrapper onSubmit={formik.handleSubmit}>
            <Header icons={faBusinessTime} title={"Add transaction!"} />
            <Input type="text" label="Transaction name" name="name" placeholder="nazwa transakcji..." onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} error={formik.errors.name} message={formik.errors.name} touched={formik.touched.name} />
            <Input type="text" label="Kwota transakcji" name="amount" placeholder="kwota..." onChange={formik.handleChange} value={formik.values.amount} onBlur={formik.handleBlur} error={formik.errors.amount} message={formik.errors.amount} touched={formik.touched.amount}/>
            <Select options={SelectOptions} label="Wybierz kategorię transakcji" name="category" onChange={formik.handleChange} value={formik.values.category} onBlur={formik.handleBlur} error={formik.errors.category} message={formik.errors.category} touched={formik.touched.category}/>
            <ButtonWrapper>
                <Button type="submit" title="Zapisz" icons={faSave} />
                <Button title="Anuluj" icons={faWindowClose} type="cancel" onClick={closeForm} />
            </ButtonWrapper>
         </FormWrapper>
        }
        </>
    )
}

export default FormData;
