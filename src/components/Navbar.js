import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
width: 100%;
height: 65px;
line-height: 65px;
background-color: #45a8ed;
color: white;
margin-left: auto;
margin-right: auto;
max-width: 100%;
text-align: center;
font-family: Helvetica Neue Light;
font-size: 20px;

  
`;

const Navbar = () => (
  <Nav>
    <p>Track.it</p>
  </Nav>
);

export default Navbar;
