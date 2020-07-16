import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const Block = styled.div`
  height: 60px;
  color: #b7bcc8;
  background-color: white;
  margin: 5px;
  margin-bottom: 10px;
`;
const MeasurementAd = props => {
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
      sportName = 'Weight Lifting"';
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
  const month = date1.getMonth();
  const day = date1.getDay();
  const m = d.getMinutes();
  const s = d.getSeconds();
  return (
    <Block>
      <Container>
        <Row className="middle">
          <Col>{sportName}</Col>
          <Col>
            {y}
            -
            {month}
            -
            {day}
          </Col>
          <Col xs={2}>
            {m}
            :
            {s}
          </Col>
          <Col className="text-center">
            <button type="button">Delete</button>
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
