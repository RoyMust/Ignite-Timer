import React, { useState } from 'react'
import styled from 'styled-components'
import ImgProfile from './ImgProfile';
import Comments from './Comments';
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export default function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([])
  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR, })
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true })

  function handleCreateNewComment(e){
    e.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange(e) {
    e.preventDefault()

    setNewCommentText(event.target.value)
  }

  function deleteComment(commentToDelete){
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !=  commentToDelete
    })

      setComments(commentsWithoutDeletedOne)
  }

  return (
    <Container>
      <Header>
        <div>
          <ImgProfile src={author.avatarUrl} style={{ display: "none" }} />
          <TextProfile>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </TextProfile>
        </div>
        <DateTime>
          <time title={publishedDateFormatted} dateTime='2022-05-11 08:13:30'>
            {publishedDateRelativeToNow}
          </time>
        </DateTime>
      </Header>
      <Comment>
        <TextComment>
          {content.map(line => {
            if (line.type === 'paragraph') {
              return <p key={line.content}>{line.content}</p>;
            } else if (line.type === 'link') {
              return <p key={line.content}><a href="#">{line.content}</a></p>;
            }
          })}
        </TextComment>
      </Comment>
      <strong>Feedback</strong>
      <SetComment onSubmit={handleCreateNewComment}>
        <textarea
          required
          name='comments'
          placeholder='Write a comment...'
          onChange={handleNewCommentChange}
          value={newCommentText}
          />
        <footer>
          <button type='submit'>Enter</button>
        </footer>
      </SetComment>
      {comments.map(comment => {
        return (
          <Comments key={content} 
          content={comment} 
          onDeleteComment={deleteComment}
          publishedAt={publishedAt}/>
        )
      })}
    </Container>
  )
}

const Container = styled.div`
display: flex;
flex-direction: column;

background-color: #242323;
border-radius: 8px;
border: 1px solid black;
box-shadow: rgba(60, 60, 60, 0.35) 0px 5px 15px;
padding: 1rem;

margin-bottom: 3rem;
strong{
  color: white;
  text-transform: uppercase;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
`
const DateTime = styled.div`
  color: white;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif, Courier, monospace;
  display: flex;
  align-items: center;
  right: 0px;
`
const Header = styled.div`
position: relative;
display: flex;
justify-content: space-between;

div{
display: flex;
}

`
const TextProfile = styled.div`
  display: flex;
  
  justify-content: center;
  flex-direction: column;
  margin: 0 10px;
span{
  
  color: gray;
  margin-top: 5px;
  font-family: 'Courier New', Courier, monospace;
}
`
const Comment = styled.div`
  border-bottom: 1px solid black;
  margin: 2rem 0px;
  color: #e5e5e5;
  font-size: 1.2rem;
  font-family: 'Times New Roman', Times, serif, Tahoma, Geneva, Verdana, sans-serif;

`
const TextComment = styled.div`
  font-family: 'Gill Sans', 'Gill Sans MT', 'Trebuchet MS', sans-serif;
  font-size: 1.2rem;

  p{
    margin-bottom: 1rem;
  }
  a{
    color: #acacff;
  }
`
const SetComment = styled.form`
  display: flex;
  margin-top: 15px;

&:focus-within footer{
  flex: 1;
  visibility: visible;
  max-width: none;
  min-width: 4rem;
  transition: 0.1s
}

textarea{
  flex: 8;
  height: 7rem;
  background-color: #151515;
  border-radius: 8px;
  
  color: white;
  font-size: 1.2rem;
  padding: 8px;
  font-family: 'Times New Roman', Times, serif, Tahoma, Geneva, Verdana, sans-serif;
  &:focus{
    outline: none;
    border: 1px solid green;
  }
}
footer{
  display: flex;
  visibility: hidden;
  max-width: 0;

  button{
    flex: 1;
    margin-left: 10px;
    color: white;
    border: 1px solid gray;
    border-radius: 8px;
    cursor: pointer;
    background-color: green;
    font-size: 1.1rem;

    &:hover{
      background-color: transparent;
      border: 1px solid green;
      transition: 0.2s;
      background-color: #17610a;

    }
  }
}
`