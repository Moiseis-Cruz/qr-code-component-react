import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        width: 100%;
        max-width: 1440px;
        min-height: 100vh;
        margin: auto;
    }
`

export const SectionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #D6E2F0;
    width: 100%;
    height: 100vh;
`