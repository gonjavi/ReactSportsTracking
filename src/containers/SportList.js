import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class SportList extends React.Component {
  constructor(props) {
    super(props);  
  }

  
  render() {   
      
   
    return (
      <Container>
       
      </Container>
    );
  }
}

SportList.defaultProps = {
  
};

SportList.propTypes = {
  Meals: PropTypes.objectOf(PropTypes.any),
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({  
});

export default connect(mapStateToProps, mapDispatchToProps)(SportList);
