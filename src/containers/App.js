import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProducts } from '../actions/index';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SportList from './SportList';
import { getProductsError, getProducts } from '../reducers/data';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }

  shouldComponentRender() {
    const { pending } = this.props;
    if (pending === false) return false;
    return true;
  }

  render() {
    const { data, error } = this.props;
    if (!this.shouldComponentRender()) return <div>Loading</div>;
    return (
      <div className="App">
        {error && <span className="error">{error}</span>}
        <Navbar />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={() => <SportList />} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}
App.defaultProps = {
  error: '',
  pending: true,
};
App.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  error: PropTypes.string,
  fetchProducts: PropTypes.func.isRequired,
  pending: PropTypes.bool,
};

const mapStateToProps = state => ({
  error: getProductsError(state),
  data: getProducts(state),
  pending: state.pending,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchProducts,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
