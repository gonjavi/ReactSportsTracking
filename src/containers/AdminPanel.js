import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import MeasurementAd from '../components/MeasurementAd';

const Homes = styled.nav`
  height: auto;
  font-family: Helvetica-Neue-Light;
  background-color: #f3f3f6;
`;

const Title = styled.h3`
  color: #b7bcc8;
  font-size: 16px;
  padding: 15px;
  padding-bottom: 5px;
`;

const AdminPanel = props => {
  const { 
    sports: {
      data
    }
  } = props; 
  const sportMeasure = data.map(
    s => (
      <MeasurementAd
        className="text-center"
        key={s.id}
        sport={s.attributes.sport_id}
        date={s.attributes.date}
        id={s.id}
        time={s.attributes.time}
      />
    ),
  );
  return (
    <Homes>
      <Container>
        <Row>
          <Col xs={12}>
            <Title>Admin Panel</Title>
          </Col>
        </Row>
      </Container>
      {sportMeasure}
    </Homes>
  );
};

AdminPanel.defaultProps = {
  sports: {},
};

AdminPanel.propTypes = {
  sports: PropTypes.objectOf(PropTypes.any),
};

const mapStateToProps = state => ({
  sports: state.data,
});

export default connect(mapStateToProps)(AdminPanel);
