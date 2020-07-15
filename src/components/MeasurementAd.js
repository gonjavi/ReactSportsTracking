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
  return (
    <Block>
      <Container>
        <Row className="middle">
          <Col>{sport}</Col>
          <Col>{date}</Col>
          <Col xs={2}>{time}</Col>
          <Col>
            <button type="button">Delete</button>
          </Col>
        </Row>
      </Container>
    </Block>
  );
};

MeasurementAd.propTypes = {
  sport: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default MeasurementAd;
