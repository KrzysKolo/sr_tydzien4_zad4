import React from 'react';
import Header from './budgetComponents/Header';
import Section from './budgetComponents/Section';
import SectionInfo from './budgetComponents/SectionInfo';
import H2 from './budgetComponents/sectionComponents/H2';
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
                        <H2 title="Lista transakcji" />
                        <DivItems>
                            <Section title="Przychód" label="przychód"/>
                            <Section title="Wydatki" label=""/>
                        </DivItems>
                    </SectionBudget>
                    <SectionInfo title="Stan konta"/>
                </SectionContainer>
            </Container>

        </>
    )
}

export default Budget;
