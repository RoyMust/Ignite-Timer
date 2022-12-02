import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`  

*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
:focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme['green-500']};
}
body{
    background-color: ${props => props.theme['gray-900']};
    color: ${props => props.theme['gray-300']};
    font-family: 'Roboto', sans-serif;
    font-family: 'Roboto Mono', monospace;
    font-size: 1rem;
}

`