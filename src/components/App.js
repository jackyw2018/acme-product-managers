import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Nav from './Nav';
import Home from './Home';
import Products from './Products';
import Managers from './Managers';
import { getManagers, getProducts } from '../store';

class App extends Component {
  componentDidMount() {
    this.props.getManagers();
    this.props.getProducts();
  }
  render() {
    return (
      <Router>
        <div>
          <h1>Acme Product Managers</h1>
          <Nav />
          <hr />
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/managers" component={Managers} />
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getManagers: () => dispatch(getManagers()),
  getProducts: () => dispatch(getProducts()),
});

const mapStateToProps = state => ({
  state,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
