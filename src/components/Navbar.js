import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
width: 100%;
height: 65px;
line-height: 65px;
background-color: #7fc3f3;
color: white;
margin-left: auto;
margin-right: auto;
max-width: 100%;
text-align: center;

  }
`;

const Navbar = () => {
  return (
    <Nav>
      <h1>Sports Tracking</h1>
    </Nav>
  );
};

export default Navbar;
