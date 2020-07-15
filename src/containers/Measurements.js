import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { CircularProgressbar } from 'react-circular-progressbar';
import styled from 'styled-components';
import 'react-circular-progressbar/dist/styles.css';

const Homes = styled.nav`
  height: 700px;
  font-family: Helvetica Neue Light;
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

const ProBar = styled.div`
height: 60px;
background-color: white;
text-align: center;
margin-left: auto;
margin-right: auto;
`;

const Measurements = props => {
  const { data } = props;
  console.log(data.data);
  return (
    <Homes>
      <Container>
        <Row>
          <Col xs={12}>
            <Today>Today</Today>
            <Measurement>
              <Row>
                <Col xs={2}>
                  <ProBar>
                    <CircularProgressbar value={50} />
                  </ProBar>
                </Col>
                <Col xs={7}>
                  <Row>
                    <Col xs={12}>
                      <h6>Jul 13 2015</h6>
                    </Col>
                    <Col xs={12}>
                      <p>Total </p>
                    </Col>
                  </Row>
                </Col>
                <Col xs={3}>
                  <h6>2,36</h6>
                  <p>seg</p>
                </Col>
              </Row>
            </Measurement>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Today>Yesterday</Today>
            <Measurement>
              <Row>
                <Col xs={2}>
                  <ProBar>
                    <CircularProgressbar value={50} />
                  </ProBar>
                </Col>
                <Col xs={7}>
                  <Row>
                    <Col xs={12}>
                      <h6>Jul 13 2015</h6>
                    </Col>
                    <Col xs={12}>
                      <p>Total </p>
                    </Col>
                  </Row>
                </Col>
                <Col xs={3}>
                  <h6>2,36</h6>
                  <p>seg</p>
                </Col>
              </Row>
            </Measurement>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Today>Last week</Today>
            <Measurement>
              <Row>
                <Col xs={2}>
                  <ProBar>
                    <CircularProgressbar value={50} />
                  </ProBar>
                </Col>
                <Col xs={7}>
                  <Row>
                    <Col xs={12}>
                      <h6>Jul 13 2015</h6>
                    </Col>
                    <Col xs={12}>
                      <p>Total </p>
                    </Col>
                  </Row>
                </Col>
                <Col xs={3}>
                  <h6>2,36</h6>
                  <p>seg</p>
                </Col>
              </Row>
            </Measurement>
          </Col>
        </Row>
      </Container>
    </Homes>
  );
};

Measurements.defaultProps = {
  data: {},
};

Measurements.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
};

const mapStateToProps = state => ({
  data: state.data,
});

export default connect(mapStateToProps)(Measurements);
