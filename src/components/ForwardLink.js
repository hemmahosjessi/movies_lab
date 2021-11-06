import React from 'react'
import { Link } from 'react-router-dom'
import ForwardIcon from './ForwardIcon'
import styled from 'styled-components'


const ForwardLink = styled(Link)`
// position: absolute;
display: inline-flex;
color: #fff;
align-items: center;
font-weight: 700;
text-decoration: none;
background-color: #333;
border-radius: 28px;
height: 56px;
padding: 0.5rem 0.5rem 0.5rem 1rem;
font-family: Roboto;
margin-top: 3rem;

@media (max-width: 767px) {
left: 1rem;
top: 1.5rem;
}
`


const ForwardButton = () => {

  return (
    <div>
        <ForwardLink exact to="/movies">
        Let's choose a movie! <ForwardIcon /> 
        </ForwardLink>
    </div>
  )

  };
  

  export default ForwardButton