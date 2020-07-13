import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import 'react-circular-progressbar/dist/styles.css';

const Homes = styled.nav`
  height: 700px;
  font-family: Helvetica Neue Light;
  background-color: #f3f3f6;
`;
const Date = styled.div`
  width: 100%;
  height: 200px;
  padding: 20px;
  background-color: white;
  text-align: center;
`;

const Username = () => {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Date> 7 July 2020 </Date>
        </Col> 
      </Row>
      <Row>
        <Col xs={{ span: 3, offset: 3 }}>
          <form>
            <label htmlFor="username">
              Type your username:
              <input type="text" name="username" />
            </label>
            <input type="submit" value="Sign In" />
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Username;
