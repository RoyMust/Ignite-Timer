import React from 'react'
import styled from 'styled-components'
import ImgProfile from './ImgProfile';

export default function Profile() {
  return (
    <Container>
      <PositionRelative>
        <img src='https://github.com/RoyMust.png' />
      </PositionRelative>
      <Header>
        <img src="https://cdn.pixabay.com/photo/2022/09/09/15/16/monastery-7443192_960_720.jpg" alt="" />
      </Header>
      <TextProfile>
        <strong>Samuel Mendes</strong>
        <span>Web Developer</span>
      </TextProfile>
      <Footer>
        <button>
          Editar seu perfil
        </button>
      </Footer>
    </Container>
  )
}

const Container = styled.div`
  border: 1px solid black;
  overflow: hidden;
  border-radius: 8px;
  position: relative;
  color: white;
  box-shadow: rgb(52, 60, 69) 0px 20px 30px -10px;  
  height: 20rem;

`

const TextProfile = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 1rem 0px 1rem;
  

strong{
  text-transform: uppercase;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
span{
  margin-top: 5px;
  font-family: 'Courier New', Courier, monospace;
}
`
const Footer = styled.div`
  display: flex;
  justify-content: center;

button{
  background-color: transparent;
  color: white;
  font-family:  'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 1rem;
  width: 10rem;
  height: 3rem;
  margin: 1rem;
  border-radius: 8px;
  border: 2px solid green;
  cursor: pointer;

  &:hover{
    background-color: green;
    transition: 0.1s
  }
}
`
const Header = styled.div`
  height: 9rem;
  img{
      height: 6rem;
      width: 100%;
    }
`
const PositionRelative = styled.div`
  position: absolute;
  top: 3.5rem;
  left: 50%;
  transform: translateX(-50%);

  img{
  background-color: #2c2c2c;
  padding: 3px;
  height: 5rem;
  width: 5rem;
  border-radius: 8px;
  border: 2px solid green;
  }
`