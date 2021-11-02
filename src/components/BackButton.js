import React from 'react'
import { Link } from 'react-router-dom'
import BackIcon from './BackIcon'
import styled from 'styled-components'

// const BackButton = () => {
//     return (
//         <Link to="/" className="back-button">
//             <BackIcon /> Back to overview
//         </Link>
//     )
// }

// export default BackButton


const BackButton = () => {

    const StyledLink = styled(Link)`
        position: absolute;
        display: inline-flex;
        color: #fff;
        align-items: center;
        font-weight: 700;
        text-decoration: none;
        left: 50px;
        top: 50px;
  `
  return (
    <div>
        <StyledLink to="/">
            <BackIcon /> Back to overview
        </StyledLink>
    </div>
  );

  };
  


  export default BackButton