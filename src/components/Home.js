import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { CircularProgressbar } from 'react-circular-progressbar';
import styled from 'styled-components';
import 'react-circular-progressbar/dist/styles.css';

const Homes = styled.nav`
  height: 700px;
  font-family: Helvetica Neue Light;
  background-color: #f3f3f6;
`;
const Date = styled.div`
  width: 100%;
  height: 70px;
  padding: 20px;
  background-color: white;
  text-align: center;
`;
const Progress = styled.div`
  width: 100%;
  height: 130px;
  padding: 20px;
  background-color: white;
  text-align: center;
`;
const ProBar = styled.div`
width: 60%;
height: 40px;
background-color: white;
text-align: center;
margin-left: auto;
margin-right: auto;
`;
const Sport = styled.nav`
  display: block;
  width: 80%;
  height: 80px;
  font-family: Helvetica Neue Light;
  background-color: #fdfdfd;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: auto;
margin-right: auto;
`;

const Home = () => {
  return (
    <Homes>
      <Container>
        <Date> 7 July 2020 </Date>
        <Progress>
          <Row>
            <Col>
              <ProBar>
                <CircularProgressbar value={10} text={`${10}%`} />
              </ProBar>
            </Col>
            <Col>
              <ProBar>
                <CircularProgressbar value={40} text={`${40}%`} />
              </ProBar>
            </Col>
            <Col>
              <ProBar>
                <CircularProgressbar value={10} text={`${10}%`} />
              </ProBar>
            </Col>
          </Row>
        </Progress>
        <Row>
          <Col sm={6} xs={6} className="sport">
            <Sport>Jogging</Sport>
            <Sport>Jogging</Sport>
            <Sport>Jogging</Sport>
          </Col>
          <Col sm={6} xs={6} className="sport">
            <Sport>Jogging</Sport>
            <Sport>Jogging</Sport>
            <Sport>Jogging</Sport>
          </Col>
        </Row>
      </Container>
    </Homes>
  );
};

export default Home;
