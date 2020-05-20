import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { HelloWorld } from '@/components';
import * as Actions from '@/store/actions';
import './App.css';

class App extends Component {
  handleIncreaseCounterAsync = () => {
    const { increaseCounterAsync } = this.props;
    increaseCounterAsync(2);
  };

  handleIncreaseCounter = () => {
    const { increaseCounter } = this.props;
    increaseCounter(1);
  };

  handleDecreaseCounter = () => {
    const { decreaseCounter } = this.props;
    decreaseCounter(1);
  };

  render() {
    const { counter } = this.props;

    return (
      <div className="App">
        <HelloWorld />

        <br />
        <p>{counter}</p>

        <button type="button" onClick={this.handleIncreaseCounterAsync}>
          increase async
        </button>
        <button type="button" onClick={this.handleIncreaseCounter}>
          increase
        </button>
        <button type="button" onClick={this.handleDecreaseCounter}>
          decrease
        </button>
      </div>
    );
  }
}

export default connect(
  state => ({
    counter: state.counter.counter,
  }),
  dispatch => ({
    dispatch,
    ...bindActionCreators(Actions, dispatch),
  }),
)(App);
