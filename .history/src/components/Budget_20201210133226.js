import React, { useContext } from 'react';
import Header from './budgetComponents/Header';
import Section from './budgetComponents/Section';
import SectionInfo from './budgetComponents/SectionInfo';
import H2 from './budgetComponents/sectionComponents/H2';
/* import ExpenseTransaction from './data/ExpenseTransaction';
import IncomeTransaction from './data/IcomeTransaction'; */
import {GlobalContextProvider, GlobalContext} from './context/GlobalState';
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
    const {transactions}=useContext(GlobalContext);
    const cat = transactions.map(transaction => transaction);
    console.log(cat);
    const income = cat
        .filter(category => category=0)
        .reduce((acc, item) => (acc+=item),0).toFixed(2);
    const expense = (cat
        .filter(category => category>0)
        .reduce((acc, item) => (acc+=item),0)*1).toFixed(2);
    const totalAmounte = income - expense;
        console.log(income);
    return (
        <GlobalContextProvider>
            <GlobalStyle />
            <Container>
                <Header />
                <SectionContainer>
                    <SectionBudget>
                        <H2 title="Transactions list" />
                        <DivItems>
                            <Section title="Income" label="income" data={transactions} total={+income}/>
                            <Section title="Expenses" data={transactions} total={-expense} />
                        </DivItems>
                    </SectionBudget>
                    <SectionInfo title="Your Balance" total={totalAmounte} />
                </SectionContainer>
            </Container>
        </GlobalContextProvider>
    )
}

export default Budget;
