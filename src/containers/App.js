import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProducts, fetchProgress } from '../actions/index';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Username from './Username';
import Measurements from './Measurements';
import IntroduceMeasurement from '../components/IntroduceMeasurement';
import AdminPanel from './AdminPanel';
import { getProductsError, getProducts } from '../reducers/data';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentDidMount() {
    const { fetchProducts } = this.props;
    const { fetchProgress } = this.props;
    fetchProducts();
    fetchProgress();
  }

  shouldComponentRender() {
    const { pending } = this.props;
    if (pending === false) return false;
    return true;
  }

  render() {
    const { error } = this.props;
    if (!this.shouldComponentRender()) return <div>Loading</div>;
    return (
      <div className="App">
        {error && <span className="error">{error}</span>}
        <Navbar />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Username} />
            <Route path="/home" component={Home} />
            <Route path="/measurements" component={Measurements} />
            <Route path="/measurement/:id" component={IntroduceMeasurement} />
            <Route path="/admin" component={AdminPanel} />
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
  error: PropTypes.string,
  fetchProducts: PropTypes.func.isRequired,
  fetchProgress: PropTypes.func.isRequired,
  pending: PropTypes.bool,
};

const mapStateToProps = state => ({
  error: getProductsError(state),
  data: getProducts(state),
  pending: state.pending,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchProducts,
  fetchProgress,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
