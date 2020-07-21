import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import {
  Circle,
  Space,
  Button,
  Space2,
} from '../styles/introduceMeasurement';

const IntroduceMeasurement = props => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [measurement, setMeasurement] = useState(false);

  const {
    match,
  } = props;
  const { params } = match;
  const { id } = params;

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
    setMeasurement(false);
  }

  function saveToApi() {
    setMeasurement(true);
  }

  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  useEffect(() => {
    if (measurement) {
      axios.post(
        'http://localhost:3001/api/v1/measurements',
        {
          time: formatTime(seconds),
          date: Date(),
          sport_id: id,
        },
        {
          headers: {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH',
          },
        },
      )
        .then(res => {
          if (res.error) {
            throw (res.error);
          }
          window.location.reload(false);
          return res;
        }).catch(error => error);
    }
  }, [measurement, seconds, id]);

  return (
    <Container>
      <Space>
        <h6>Add measurement</h6>
      </Space>
      <Row>
        <Col xs={2} sm={3} md={3} />
        <Col xs={8} sm={6} md={6} className="text-center">
          <Circle>
            {seconds}
          </Circle>
        </Col>
      </Row>
      <Space2 />
      <Row>
        <Col />
        <Col xs={3}>
          <Button type="button" onClick={toggle}>
            {isActive ? 'Stop' : 'Start'}
          </Button>
        </Col>
        <Col xs={3}>
          <Button type="button" onClick={reset}>
            Reset
          </Button>
        </Col>
        <Col xs={3}>
          <Button type="button" onClick={saveToApi}>
            Save
          </Button>
        </Col>
        <Col />
      </Row>
    </Container>
  );
};

IntroduceMeasurement.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default IntroduceMeasurement;
