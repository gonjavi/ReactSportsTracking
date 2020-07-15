import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import axios from 'axios';
import { fetchProductsError } from '../actions/index';

const Circle = styled.div`
  height: 200px;
  width: 200px;
  background-color: white;
  border: 4px solid #45a8ed;
  border-radius: 50%;
  display: inline-block;
  text-align: center;
  font-size: 40px;
  color: #b3bac7;
  padding-top: 75px;
  
`;

const Space = styled.div`
  width: 100%;
  height: 80px;
  text-align: center;
  color: #b3bac7;
`;

const Button = styled.div`
  width: 100%;
  height: 50px;
  background-color: #9cee95;
  color: white;
  text-align: center;  
`;

const Space2 = styled.div`
  padding-top: 20px;
`;

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
  }

  function toDateTime(secs) {
    const time = new Date(1970, 0, 1); // Epoch
    time.setSeconds(secs);
    return time;
  }

  function saveToApi() {
    setMeasurement(true);
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

  useEffect(() => dispatch => {
    if (measurement) {
      axios.post(
        'https://trackingapi-gon.herokuapp.com/api/v1/measurements',
        {
          time: toDateTime(seconds),
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
          return res;
        }).catch(error => {
          dispatch(fetchProductsError(error));
        });
    }
  }, [measurement, seconds, id]);

  return (
    <Container>
      <Space>
        <h6>Add measurement</h6>
      </Space>
      <Row>
        <Col xs={{ span: 3, offset: 3 }}>
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
