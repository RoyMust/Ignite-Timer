import { useContext, useEffect, useState } from 'react'
import { differenceInSeconds } from 'date-fns'
import styled from 'styled-components'
import { CyclesContext } from '../../../global/contexts/CyclesContext'

export default function CountDown() {
  const { activeCycle, 
    activeCycleId, 
    markCurrentCyclesAsFinished, 
    amountSecondsPassed,
    setSecondsPassed} = useContext(CyclesContext)
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference =
          differenceInSeconds(new Date(),
            activeCycle.startDate,)

        if (secondsDifference >= totalSeconds) {
          markCurrentCyclesAsFinished()
          setSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          setSecondsPassed(secondsDifference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, totalSeconds, activeCycleId, markCurrentCyclesAsFinished])

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes} : ${seconds}`
    }
  }, [minutes, seconds, activeCycle
  ])

  return (
    <Count>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <strong>:</strong>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </Count>
  )
}
const Count = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;

span{
  display: flex;
  justify-content: center;
  align-items: center;
  
  font-family: 'Roboto Mono', monospace;
  font-size: 6rem;
  flex: 1;
  height: 9rem;
  margin: 0 0.2rem;
  background-color: ${props => props.theme['gray-700']};
  border-radius: 8px;
}
strong{
  margin: 0 15px;
  font-size: 5rem;
  color: ${props => props.theme['green-500']};
}
`