import React from 'react'
import { Link } from 'react-router-dom'
import BackIcon from './BackIcon'
import styled from 'styled-components'


const StyledLink = styled(Link)`
position: absolute;
display: inline-flex;
color: #fff;
align-items: center;
font-weight: 700;
text-decoration: none;
left: 4rem;
top: 4rem;
background-color: #333;
border-radius: 22px;
height: 44px;
padding: 0.5rem 1.5rem 0.5rem 0.5rem;
font-family: Roboto;
transition: 0.3s;
&:hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);

@media (max-width: 767px) {
left: 1rem;
top: 1.5rem;
}
`


const BackToStartButton = () => {

  return (
    <div className='back-start'>
        <StyledLink to="/">
            <BackIcon /> Back to Startpage
        </StyledLink>
    </div>
  )

  };
  

  export default BackToStartButton