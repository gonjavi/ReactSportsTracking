import React from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Footer1 = styled.div`
position: bottom;
width: 100%;
height: 65px;
line-height: 65px;
background-color: gray;
color: white;
margin-left: auto;
margin-right: auto;
max-width: 100%;
text-align: center;

  }
`;

const Footer = () => {
  return (
    <Footer1>
      <h1>Sports Tracking</h1>
    </Footer1>
  );
};

export default Footer;
