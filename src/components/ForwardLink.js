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
&:hover {
  background-color: #1a1a1a;
  // color: #333;
  border: 3px dotted #e6e230;
  animation: bounce 1s;

  @keyframes bounce {
    0%, 20%, 60%, 100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  
    40% {
      -webkit-transform: translateY(-20px);
      transform: translateY(-20px);
    }
  
    80% {
      -webkit-transform: translateY(-10px);
      transform: translateY(-10px);
    }
  }
}


@media (max-width: 767px) {
left: 1rem;
top: 1.5rem;
}
`


const ForwardButton = () => {

  return (
    <div className='button-hover'>
        <ForwardLink exact to="/movies">
        Let's choose a movie! <ForwardIcon /> 
        </ForwardLink>
    </div>
  )

  };
  

  export default ForwardButton