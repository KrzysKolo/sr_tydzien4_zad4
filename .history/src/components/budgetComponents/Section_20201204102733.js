import React from 'react';
import { H1 }from './sectionComponents/index';
import ExpenseTransaction from './../data/ExpenseTransaction';
import IncomeTransaction from './../data/IcomeTransaction';
import styled from 'styled-components';

const SectionWrapper = styled.section`
    border: 1px solid #ccc;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    font-size: 1.3rem;
    justify-content: center;
    align-items: center;
    margin: 2%;
    padding: 20px;
    min-width: 350px;
    width: 50%;
`;
const Section = ({ title, label }) => {
   return (
        <SectionWrapper>
           <H1 title={title} label={label} />

        </SectionWrapper>
    )
}

export default Section;
