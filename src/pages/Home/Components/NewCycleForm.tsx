import styled from 'styled-components'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../global/contexts/CyclesContext'


export default function NewCycleForm() {

  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <Form>
          <label htmlFor="task">Vo trabalhar em</label>
          <input
            style={{ width: '12.5rem' }}
            disabled={!!activeCycle}
            id='task'
            placeholder='Dê um nome para o seu projeto'
            list='task-suggestions'
            {...register('task')}
          />
          <datalist id='task-suggestions'>
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
          </datalist>
          <label htmlFor="minutesAmount">durante</label>
          <input
            style={{ width: '3.7rem' }}
            disabled={!!activeCycle}
            type="number"
            id='minutesAmount'
            placeholder='00'
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
          />
          <span>minutes.</span>
        </Form>
  )
}

const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${props => props.theme['gray-700']};
  padding: 0.5rem;
  border-radius: 8px;

  color: ${props => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
  gap: 0.5rem;

input{
  background-color: transparent;
  padding: 5px;
  border: none;
  border-bottom: 1px solid gray;
  color: white;
  font-family: 'Roboto', sans-serif;

  &::-webkit-calendar-picker-indicator{
    display: none !important;
  }

  &:focus{
    box-shadow: none;
    border-bottom: 1px solid ${props => props.theme['green-500']} ;
  }
}
`