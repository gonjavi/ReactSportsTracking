import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import axios from 'axios';

const Block = styled.div`
  height: 60px;
  color: #b7bcc8;
  background-color: white;
  margin: 5px;
  margin-bottom: 10px;
`;
const MeasurementAd = props => {
  const [remove, setRemove] = useState(false);
  const {
    sport,
    time,
    date,
    id,
  } = props;
  let sportName;
  switch (sport) {
    case 1:
      sportName = 'Cycling';
      break;
    case 2:
      sportName = 'Jogging';
      break;
    case 3:
      sportName = 'Swimming';
      break;
    case 4:
      sportName = 'Walking';
      break;
    case 5:
      sportName = 'Weight Lifting';
      break;
    case 6:
      sportName = 'Treadmill-workout';
      break;
    default:
      sportName = '';
  }
  const d = new Date(time);
  const date1 = new Date(date);
  const y = date1.getFullYear();
  const month = date1.getMonth() + 1;
  const day = date1.getDate();
  const m = d.getMinutes();
  const s = d.getSeconds();

  function deleteMeasurement() {
    setRemove(true);
  }
  useEffect(() => () => {
    axios.delete(`https://trackingapi-gon.herokuapp.com/api/v1/measurements/${id}`)
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        window.location.reload(false);
        return res;
      }).catch(error => error);
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
            {y}
          </Col>
          <Col xs={2}>
            {m}
            :
            {s}
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
