import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './global/styles/globalStyle'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import { defaultTheme } from './global/styles/default'
import { CyclesContextProvider } from './global/contexts/CyclesContext'

export default function App() {

  return (
    <Container>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <CyclesContextProvider>
            <Router />
          </CyclesContextProvider>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </Container>
  )
}
const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(95deg, ${props => props.theme['green-500']}, #0c2504)

`