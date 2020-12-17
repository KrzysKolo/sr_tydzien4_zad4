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
`;

const Budget = () => {
    return (
        <>
            <GlobalStyle />
            <Container>
                <h2> To ja ;)</h2>
            </Container>
        </>
    )
}

export default Budget;
