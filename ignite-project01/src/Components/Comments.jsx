import React, { useState } from 'react'
import styled from 'styled-components';
import { BiTrash } from 'react-icons/bi'
import { FcLike } from 'react-icons/fc'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export default function Comments({ content, onDeleteComment, publishedAt }) {
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR, })
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true })

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {

        onDeleteComment(content)
    }

    function handleAddLike() {
        setLikeCount(likeCount + 1)
    }

    return (
        <Container>
            <Image src='https://github.com/RoyMust.png' />
            <Wrapper style={{ flexDirection: 'column' }}>
                <Wrapper>
                    <Header>
                        <TextProfile>
                            <strong style={{ marginBottom: '3px' }}>Samuel Mendes</strong>
                            <time title={publishedDateFormatted} dateTime='2022-05-11 08:13:30'>
                                {publishedDateRelativeToNow}
                            </time>
                        </TextProfile>
                        <button onClick={handleDeleteComment} title='Deletar Commentário'>
                            <BiTrash />
                        </button>
                    </Header>
                    <Comment>
                        <p>{content}</p>
                    </Comment>
                </Wrapper>
                <Likes onClick={handleAddLike}> <FcLike />
                    <span>{likeCount} Likes</span>
                </Likes>
            </Wrapper>
        </Container>
    )
}
const Container = styled.div`
    display: flex;
    background-color: #1c1c1c;
    margin-top: 1.5rem;
    border: 1px solid #0e0e0e;
    border-radius: 8px;
    padding: 7px;
    word-break: break-all;
`
const Header = styled.header`
display: flex;
justify-content: space-between;
width: 100%;

button{
        font-size: 1.7rem;
        border: none;
        background-color: transparent;
        color: white;
        cursor: pointer;
}
`
const Wrapper = styled.div`
display: flex;
flex-direction: column;
position: relative;
background-color: #202020;
border-radius: 8px;
padding: 4px;
flex:1;
`
const TextProfile = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 1rem;

time{
    color: #b1b1b1;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
`
const Image = styled.img`
    height: 4rem;
    width: 4.5rem;
    border-radius: 8px;
    margin-right:0.7rem;
`
const Comment = styled.div`

flex-direction: column;
font-size: 1.3rem;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

    p{
        color: #d1d1d1;
    }

`
const Likes = styled.button`
    font-size: 1rem;
    background-color: transparent;
    color: white;
    width: 6rem;
    margin-top: 1rem;
    border: 1px solid #383838;
    border-radius: 8px;
        span{
            margin-left: 5px;
        }
`