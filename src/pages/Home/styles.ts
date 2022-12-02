import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`
export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  gap: 3rem;
`
export const Button = styled.button`
  width: 100%;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
  color: white;
  border-radius: 8px;
  font-size: 1.25rem;
  font-weight: 700;
  border: none;

  span{
    margin: 5px;
  }
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
 
`
export const StartButton = styled(Button)`
  background-color: ${props => props.theme['green-500']};
  &:not(:disabled):hover {
    background-color: ${props => props.theme['green-700']};
  }
`
export const StopButton = styled(Button)`
  background-color: ${props => props.theme['red-500']};
  &:not(:disabled):hover {
    background-color: ${props => props.theme['red-700']};
  }
`