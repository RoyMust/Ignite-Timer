import { useContext } from 'react'
import { useForm , FormProvider } from 'react-hook-form'
import { Container, FormContainer, StartButton, StopButton } from './styles'
import { Play, HandPalm } from 'phosphor-react'
import NewCycleForm from './Components/NewCycleForm'
import CountDown from './Components/CountDown'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { CyclesContext } from '../../global/contexts/CyclesContext'


const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod.number().min(1).max(60),
})

type newCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export default function Home() {
  const { activeCycle ,createNewCycle, interruptCurrentCycle } = useContext(CyclesContext)

  const newCyclesForm = useForm<newCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCyclesForm

  function handleCreateNewCycle(data: newCycleFormData) {
    createNewCycle(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit(handleCreateNewCycle)}>
        
          <FormProvider {...newCyclesForm}>
            <NewCycleForm />
          </FormProvider>
          <CountDown />
        {activeCycle ? (
          <StopButton onClick={interruptCurrentCycle} type='button'>
            <HandPalm />
            <span>Stop</span>
          </StopButton>)
          : (<StartButton disabled={isSubmitDisabled} type='submit'>
            <Play />
            <span>Start</span>
          </StartButton>)}
      </FormContainer>
    </Container >
  )
}

