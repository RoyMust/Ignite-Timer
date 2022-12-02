import styled from 'styled-components'
import { CyclesContext } from '../../global/contexts/CyclesContext'
import { useContext } from 'react';
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export default function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <Container>
      <h2>Meu Histórico</h2>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
          {cycles.map(cycle => {
            return (
              <tr key={cycle.id}>
                <th>{cycle.task}</th>
                <th>{cycle.minutesAmount} min</th>
                <th>{formatDistanceToNow(cycle.startDate, {
                  addSuffix: true,
                  locale: ptBR
                })}</th>
                <th>
                  {cycle.finishedDate && <Status statusColor='green'>Concluído</Status>}
                  {cycle.interruptedDate && <Status statusColor='red'>Interrompido</Status>}
                  {(!cycle.finishedDate && !cycle.interruptedDate) && (<Status statusColor='yellow'>Em andamento</Status>)}
                </th>
              </tr>
            )
          })}
        </table>
      </HistoryList>
    </Container>
  )
}
const STATUS_COLORS = {
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'red-500'
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}
const Status = styled.span<StatusProps>`
display: flex;
align-items: center;
gap: 0.5rem;

&::before{
  content: '';
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: ${props => props.theme[STATUS_COLORS[props.statusColor]]};
}
`
const Container = styled.main`
flex: 1;
padding: 1.5rem;
display: flex;
flex-direction: column;
max-height: 25rem;

h1{
  font-size: 1.5rem;
  color: ${props => props.theme['gray-100']}
}
`
const HistoryList = styled.div`
flex: 1;
overflow: auto;
margin-top: 1rem;
font-size: 0.8rem;

table{
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;
  border-radius: 8px;
  overflow: hidden;
  font-size: 0.5;
 
  th{
    background-color: ${props => props.theme['gray-600']};
    padding: 0.5rem 1rem ;
    text-align: left;
    color: ${props => props.theme['gray-100']};
    line-height: 1.6;
    
    &:first-child{
      width: 40%;
      @media screen and (max-width: 1200px) {
		  width: 20%;
      
	}
    }
  }
}
td{
    background-color: ${props => props.theme['gray-700']};
    border-top: 4px solid ${props => props.theme['gray-800']};
    font-size: 0.5rem;
    line-height: 1.6;
    padding: 0.5rem 1rem;
  }  
`
