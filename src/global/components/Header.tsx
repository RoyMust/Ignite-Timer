import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../assets/images/Logo.svg'
import { Timer, Scroll } from 'phosphor-react'

export default function Header() {
  return (
    <Container>
      <div>
        <img src={Logo} style={{ height: '2rem' }} />
        <span>Ignite Timer</span>
      </div>
      <nav>
        <NavLink to='/' title='timer' ><Timer size={28} /></NavLink>
        <NavLink to='/history' title='history'><Scroll size={28} /></NavLink>
      </nav>

    </Container>
  )
}

const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

div{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  color: ${props => props.theme['green-500']};
}
nav{
  gap: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  a{
    width: 2.5rem;
    height: 2.5rem;

    display: flex;
    justify-content: center;
    align-items: center;
  
    color: white;
    border-bottom:3px solid transparent;
    box-shadow: none;
    border: 8px;

    &:hover{
      border-bottom: 3px solid ${props => props.theme['green-500']};
      background-color: ${props => props.theme['gray-700']};
      border-radius: 8px;
    }
    &.active{
      color: ${props => props.theme['green-700']};
    }
  }
}
`