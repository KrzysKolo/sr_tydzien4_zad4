import React from 'react';
import Header from './budgetComponents/Header';
import Section from './budgetComponents/Section';
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
    font-size: 1.2rem;
`;
const SectionContainer = styled.section`
    border: 1px solid red;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
const Budget = () => {
    return (
        <>
            <GlobalStyle />
            <Container>
                <Header />
                <SectionContainer>
                    <SectionBudget>
                        <Section title={"Przychód"} label={"p"}/>
                        <Section title={"Wydatki"}/>
                    </SectionBudget>
                    <Section title={"Stan konta"}/>
                </SectionContainer>
            </Container>
        </>
    )
}

export default Budget;
