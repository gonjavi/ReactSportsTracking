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
    color: #848996;
  }
  p {
    color: #787b87;
  }
`;
const Today = styled.h3`
  color: #999da8;
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
  let today = '';
  let yesterday = '';
  let lastweek = '';

  // eslint-disable-next-line no-restricted-syntax
  for (const key in attributes) {
    if (Object.prototype.valueOf.call(attributes, key)) {
      if (key === 'today') {
        today = attributes[key];
      } else if (key === 'yesterday') {
        yesterday = attributes[key];
      } else if (key === 'lastweek') {
        lastweek = attributes[key];
      }
    }
  }
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
                      <p>
                        {today}
                        {' '}
                        times
                      </p>
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
            <Today>Yesterday</Today>
            <Measurement>
              <Row>
                <Col xs={2} />
                <Col xs={7}>
                  <Row>
                    <Col xs={12}>
                      <h6>Number of Measurements</h6>
                    </Col>
                    <Col xs={12}>
                      <p>
                        {yesterday}
                        {' '}
                        times
                      </p>
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
                      <p>
                        {lastweek}
                        {' '}
                        times
                      </p>
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
