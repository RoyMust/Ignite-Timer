import React from 'react'
import styled from 'styled-components'
import Header from '../Header'
import { Outlet } from 'react-router-dom'

export default function defaultLayout() {
	return (
		<Container>
			<Header />
			<Outlet />
		</Container>
	)
}
const Container = styled.div`
	width: 55rem;
	height: 30rem;
	padding: 1.5rem;
	font-family:Georgia, 'Times New Roman', Times, serif;
	background-color: ${props => props.theme['gray-800']};
	border-radius: 8px;
	box-shadow: #169a46e6 0px 5px 15px 0px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 64, 16, 0.614) 0px -2px 6px 0px inset;
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 1200px) {
		width: 95%;
	}
`

