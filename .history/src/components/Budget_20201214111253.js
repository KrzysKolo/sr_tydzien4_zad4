import React from 'react';
import Header from './budgetComponents/Header';
import Section from './Section';
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

const Budget = () => {
    const { expenseTransactions, incomeTransactions } = useContext(GlobalContext);
    const amountsE = expenseTransactions.map(transaction => transaction.amount);
    const totalE = amountsE.reduce((acc, item) => (acc+=item), 0).toFixed(2);
    const amountsI = incomeTransactions.map(transaction => transaction.amount);
    const totalI = amountsI.reduce((acc, item) => (acc+=item), 0).toFixed(2);
    const total = totalI-totalE;
    return (
        <GlobalContextProvider>
            <GlobalStyle />
            <Container>
                <Header />
                <Section />
            </Container>
        </GlobalContextProvider>
    )
}

export default Budget;
