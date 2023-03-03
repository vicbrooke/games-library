import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    .home{
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
    }
    .card{
        background: ${({ theme }) => theme.card};
        color: ${({ theme }) => theme.text};
    }
    .favourites-container{
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
    }
    .game{
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
    }

`

export default GlobalStyle;