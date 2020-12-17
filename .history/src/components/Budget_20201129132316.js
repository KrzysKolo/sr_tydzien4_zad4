import React from 'react';
import Header from './budgetComponents/Header';
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
    font-size: 2rem;
    display: grid;
    grid-template-rows: minmax(min-content, min-content, max-content) 1fr;
`;
const SectionContainer = styled.section`
    border: 1px solid red;
`;
const Budget = () => {
    return (
        <>
            <GlobalStyle />
            <Container>
                <Header />
                <SectionContainer>
                    <h1>1</h1>
                    <h1>2</h1>
                    <h1>3</h1>
                </SectionContainer>
            </Container>
        </>
    )
}

export default Budget;
