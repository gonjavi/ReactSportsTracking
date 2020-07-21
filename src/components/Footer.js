import React from 'react';
import { render } from 'react-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import one from '../img/one1.png';
import two from '../img/two2.png';
import three from '../img/three3.png';
import more from '../img/more.png';
import Footer1 from '../styles/footer';

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
