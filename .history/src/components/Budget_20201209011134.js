import React from 'react';
import Header from './budgetComponents/Header';
import Section from './budgetComponents/Section';
import SectionInfo from './budgetComponents/SectionInfo';
import H2 from './budgetComponents/sectionComponents/H2';
/* import ExpenseTransaction from './data/ExpenseTransaction';
import IncomeTransaction from './data/IcomeTransaction'; */
import {GlobalContextProvider} from './context/GlobalState';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body {
        background-color: #f9f9f9;
        color: #14161f;
        font-family: "Montserrat", sans-serif;
        font-size: 16px;
        min-height: 100vh;
    }
    `;
const Container = styled.main`
    font-size: 1.5rem;
`;
const SectionContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
const SectionBudget = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const DivItems = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;

`;
const Budget = () => {
    return (
        <GlobalContextProvider>
            <GlobalStyle />
            <Container>
                <Header />
                <SectionContainer>
                    <SectionBudget>
                        <H2 title="Transactions list" />
                        <DivItems>
                            <Section title="Income" label="p" />
                            <Section title="Expenses"  />
                        </DivItems>
                    </SectionBudget>
                    <SectionInfo title="Your Balance" />
                </SectionContainer>
            </Container>
        </GlobalContextProvider>
    )
}

export default Budget;
