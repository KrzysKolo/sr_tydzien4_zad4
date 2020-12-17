import React from 'react';
import { H2, P } from './sectionComponents/index';
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
showPanel() {
    this.AddTransactionPanel.style.display = "flex";
  }

const Section = ({ title }) => {
    return (
        <SectionWrapper>
           <H2 title={title}> </H2>
           <P />
           <ButtonWrapper>
                <Button title="Dodaj transakcje" icons={faPlus} type="submit" onSubmit={this.showPanel()}/>
                <Button title="Usuń wszystko" icons={faTrashAlt} type="submit"/>
           </ButtonWrapper>
        </SectionWrapper>
    )
}

export default Section;
