import React from 'react';
import { render } from 'react-dom';
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

const Footer = () => (
  <Footer1>
    <Container>
      <Row>
        <Col xs={3} lg={{ span: 2, offset: 2 }}>
          <a href="/admin">
            <img
              alt="one"
              width="40%"
              height="40%"
              src={one}
            />
          </a>
        </Col>
        <Col xs={3} lg={2}>
          <a href="/home">
            <img
              alt="one"
              width="40%"
              height="40%"
              src={two}
            />
          </a>
        </Col>
        <Col xs={3} lg={2}>
          <a href="/measurements">
            <img
              alt="one"
              width="40%"
              height="40%"
              src={three}
            />
          </a>
        </Col>
        <Col xs={3} lg={2}>
          <a href="/">
            <img
              alt="one"
              width="40%"
              height="40%"
              src={more}
            />
          </a>
        </Col>
      </Row>
    </Container>
  </Footer1>
);

export default Footer;

render(<Footer />, document.getElementById('footer'));
