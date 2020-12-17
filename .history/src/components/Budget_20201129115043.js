import React from 'react'
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body {
        min-height: 100vh;
        font-family: "Montserrat", sans-serif;
        color: #14161f;
        background-color: #f9f9f9;
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
