import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import MeasurementAd from '../components/MeasurementAd';

const Homes = styled.nav`
  height: 700px;
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
  const { data } = props;

  return (
    <Homes>
      <Container>
        <Row>
          <Col xs={12}>
            <Title>Admin Panel</Title>
          </Col>
        </Row>
      </Container>
      <MeasurementAd
        sport="jogging"
        date="sep 21 2020"
        id={2}
        time="45"
      />
      <MeasurementAd
        sport="jogging"
        date="sep 21 2020"
        id={2}
        time="45"
      />
    </Homes>
    
  );
};

AdminPanel.defaultProps = {
  data: {},
};

AdminPanel.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
};

const mapStateToProps = state => ({
  data: state.data,
});

export default connect(mapStateToProps)(AdminPanel);
