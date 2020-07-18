import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import 'react-circular-progressbar/dist/styles.css';

const Homes = styled.nav`
  height: 700px;
  font-family: Helvetica-Neue-Light;
  background-color: #f3f3f6;
`;

const Measurement = styled.div`
  width: 100%;
  height: 83px;
  padding: 20px;
  background-color: white;
  text-align: center;
  h6 {
    color: #949ca9;
  }
  p {
    color: #dbdde3;
  }
`;
const Today = styled.h3`
  color: #b7bcc8;
  font-size: 16px;
  padding: 15px;
  padding-bottom: 5px;
`;

const Measurements = props => {
  const {
    sports: {
      progress: {
        // eslint-disable-next-line no-unused-vars
        attributes,
      },
    },
  } = props;

  return (
    <Homes>
      <Container>
        <Row>
          <Col xs={12}>
            <Today>Today</Today>
            <Measurement>
              <Row>
                <Col xs={2} />
                <Col xs={7}>
                  <Row>
                    <Col xs={12}>
                      <h6>Number of Measurements</h6>
                    </Col>
                    <Col xs={12}>
                      <p> 3 times </p>
                    </Col>
                  </Row>
                </Col>
                <Col xs={3} />
              </Row>
            </Measurement>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Today>Number of Measurements</Today>
            <Measurement>
              <Row>
                <Col xs={2} />
                <Col xs={7}>
                  <Row>
                    <Col xs={12}>
                      <h6>Number of Measurements</h6>
                    </Col>
                    <Col xs={12}>
                      <p> 4 times </p>
                    </Col>
                  </Row>
                </Col>
                <Col xs={3} />
              </Row>
            </Measurement>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Today>Last week</Today>
            <Measurement>
              <Row>
                <Col xs={2} />
                <Col xs={7}>
                  <Row>
                    <Col xs={12}>
                      <h6>Number of Measurements</h6>
                    </Col>
                    <Col xs={12}>
                      <p> 25 times </p>
                    </Col>
                  </Row>
                </Col>
                <Col xs={3} />
              </Row>
            </Measurement>
          </Col>
        </Row>
      </Container>
    </Homes>
  );
};

Measurements.defaultProps = {
  sports: {},
};

Measurements.propTypes = {
  sports: PropTypes.objectOf(PropTypes.any),
};

const mapStateToProps = state => ({
  sports: state.progress,
});

export default connect(mapStateToProps)(Measurements);
