import React from 'react';
import { NavLink } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {
  Homes,
  Date,
  Progress,
  ProBar,
  Sport,
} from '../styles/home';

const Home = () => (
  <Homes>
    <Container>
      <Date>Sports Tracking </Date>
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
      <Row className="text-center">
        <Col sm={6} xs={6} className="sport">
          <NavLink to="/measurement/1" key={1}>
            <Sport>Cycling</Sport>
          </NavLink>
          <NavLink to="/measurement/2" key={2}>
            <Sport>Jogging</Sport>
          </NavLink>
          <NavLink to="/measurement/3" key={3}>
            <Sport>Swimming</Sport>
          </NavLink>
        </Col>
        <Col sm={6} xs={6} className="sport">
          <NavLink to="/measurement/4" key={4}>
            <Sport>Walking</Sport>
          </NavLink>
          <NavLink to="/measurement/5" key={5}>
            <Sport>Weight Lifting</Sport>
          </NavLink>
          <NavLink to="/measurement/6" key={6}>
            <Sport>Treadmill Workout</Sport>
          </NavLink>
        </Col>
      </Row>
    </Container>
  </Homes>
);

export default Home;
