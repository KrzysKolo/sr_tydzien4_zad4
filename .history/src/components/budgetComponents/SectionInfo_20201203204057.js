import React, { useState, resetForm } from 'react';
import { H2, P } from './sectionComponents/index';
import Form from './Form';
import Button from './../budgetComponents/buttons/Button';
import styled from 'styled-components';
import { faPlus,  faTrashAlt } from '@fortawesome/free-solid-svg-icons';
const SectionWrapper = styled.section`
    border: 1px solid #ccc;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    margin: 2vw;
    padding: 2%;
`;
const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const SectionInfo = ({ title }) => {
    const [showForm, setShowForm] = useState(false);
    const openForm = () =>{
        setShowForm(prev => !prev);
        resetForm();
  };
    return (
        <>
        <SectionWrapper>
           <H2 title={title}> </H2>
           <P />
           <ButtonWrapper>
                <Button onClick={openForm} title="Dodaj transakcje" icons={faPlus} />
                <Button title="Usuń wszystko" icons={faTrashAlt} type="submit"/>
           </ButtonWrapper>

        </SectionWrapper>
        <Form showForm={showForm} setShowForm={setShowForm} />
        </>
    )
}

export default SectionInfo;
