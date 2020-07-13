import React from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import one from '../img/one1.png';
import two from '../img/two2.png';
import three from '../img/three3.png';
import more from '../img/more.png';

const Footer1 = styled.div`
position: fixed;
left: 0;
bottom: 0;
width: 100%;
height: 70px;
line-height: 70px;
background-color: #323645;
color: white;
margin-left: auto;
margin-right: auto;
max-width: 100%;
text-align: center;
`;

const Subtitle = styled.p`
  color: white;
`;

const Footer = () => {
  return (
    <Footer1>
      <Container>
        <Row>
          <Col>
            <img
              alt="one"
              width="40%"
              height="20%"
              src={one}
            />
            <Subtitle>Add  measure</Subtitle>
          </Col>
          <Col>
            <img
              alt="one"
              width="40%"
              height="20%"
              src={two}
            />
          </Col>
          <Col>
            <img
              alt="one"
              width="40%"
              height="20%"
              src={three}
            />
          </Col>
          <Col>
            <img
              alt="one"
              width="40%"
              height="20%"
              src={more}
            />
          </Col>
        </Row>
      </Container>
    </Footer1>
  );
};

export default Footer;