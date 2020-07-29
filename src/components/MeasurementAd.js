import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Block from '../styles/measurementAd';
import sportSelector from '../utils/sportSelector';
import timeExtractor from '../utils/timeExtractor';
import deleteMeasurementApi from '../actions/delete';

const MeasurementAd = props => {
  const [remove, setRemove] = useState(false);
  const {
    sport,
    time,
    date,
    id,
  } = props;
  const sportName = sportSelector(sport);

  const {
    year,
    month,
    day,
    min,
    sec,
  } = timeExtractor(date, time);

  function deleteMeasurement() {
    setRemove(true);
  }
  useEffect(() => () => {
    deleteMeasurementApi(id);
  }, [remove, id]);
  return (
    <Block>
      <Container>
        <Row className="middle">
          <Col>{sportName}</Col>
          <Col>
            {day}
            -
            {month}
            -
            {year}
          </Col>
          <Col xs={2}>
            {min}
            :
            {sec}
          </Col>
          <Col className="text-center">
            <button type="button" onClick={deleteMeasurement}>Delete</button>
          </Col>
        </Row>
      </Container>
    </Block>
  );
};

MeasurementAd.propTypes = {
  sport: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default MeasurementAd;
