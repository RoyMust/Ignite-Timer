import React from 'react'
import styled from 'styled-components'

export default function ImgProfile(props) {
  return (
    <Container>
      <img src={props.src} alt="" />
    </Container>
  )
}

const Container = styled.div`
  background-color: #2c2c2c;
  
  height: 5rem;
  width: 5rem;
  border-radius: 8px;
  border: 2px solid green;

img{
    height: 100%;
    width: 100%;
    padding: 3px;
    border-radius: 8px;
}
`