import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { addUsername } from '../actions/index';
import 'react-circular-progressbar/dist/styles.css';
import Date from '../styles/username';

const Username = props => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = evt => {
    evt.preventDefault();
    const { addUsername } = props;
    if (username === '') {
      setError(true);
    } else {
      addUsername(username);
      setRedirect(true);
    }
  };

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Date> Sports Tracking </Date>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 4, offset: 3 }} md={{ span: 4, offset: 5 }}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">
              Type your username:
              <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
              {error === true
                && <span>Please add your username</span>}
            </label>
            <input type="submit" value="Sign In" />
          </form>
          {redirect === true
            && <Redirect to="home" /> }
        </Col>
      </Row>
    </Container>
  );
};

Username.propTypes = {
  addUsername: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addUsername: username => dispatch(addUsername(username)),
});

export default connect(null, mapDispatchToProps)(Username);
