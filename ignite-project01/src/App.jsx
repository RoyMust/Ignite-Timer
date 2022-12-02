import React from 'react'
import styled from 'styled-components';
import Header from './Components/Header';
import Post from './Components/Post';
import Profile from './Components/Profile';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Fernanda.png",
      name: "Fernanda",
      role: "Web Developer"
    },
    content: [
    {type: 'paragraph', content:'Olá Pessoal, meu nome é Fernanda e eu sou o primeiro a postar algo aqui no Iginte Feed'},
    {type: 'paragraph', content:'To fazendo um curso louco'},
    {type: 'link', content:'fernandagomes@gmail.com'},
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/Jonas.png",
      name: "Israel Mendes",
      role: "Designer"
    },
    content: [
      {type: 'paragraph', content:'To fazendo um curso louco'},
      {type: 'paragraph', content:'Olá Pessoal, meu nome é Fernanda e eu sou o primeiro a postar algo aqui no Iginte Feed'},
      {type: 'link', content:'fernandogomes@gmail.com'},
      ],
  publishedAt: new Date('2022-08-16 22:00:00'),
},
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/Gabriele.png",
      name: "jonas",
      role: "C.O"
    },
    publishedAt: new Date('2022-08-16 22:00:00'),
    content: [
      {type: 'paragraph', content:'Olá Pessoal, meu nome é lopesFernanda e eu sou o primeiro a postar algo aqui no Iginte Feed'},
      {type: 'paragraph', content:'To fazendo um curso louco mané'},
      {type: 'link', content:'lopesgomes@gmail.com'},
      ],
  }
];

export default function App() {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Profile />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
overflow-x: hidden;
`
const Wrapper = styled.div`

margin: 1rem auto;
padding: 0 1rem;

max-width: 60rem;
display: grid;
grid-template-columns: 256px 1fr;
gap: 0.8rem;

align-items: flex-start;

@media (max-width: 768px){
  grid-template-columns: 1fr;
}
`