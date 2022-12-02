import React from 'react'
import styled from 'styled-components'
import igniteSimbol from '../assets/images/igniteSimbol.svg'

export default function Header() {
  return (
    <Container>
        <span>
            <img src={igniteSimbol} />
            <strong>Ignite Feed</strong>
        </span>
    </Container>
  )
}

const Container = styled.div`
display: flex;
justify-content: center;
padding: 1.25rem 0;
background-color: #2a2a2a;

span{
    display: flex;
    justify-content: center;
    align-items: center;
}
img{
    height: 2.0rem;
    margin-right: 0.5rem;
}
strong{
    font-size: 1.5rem;
    color: white;
    font-family: 'Courier New', Courier, monospace;
}
`