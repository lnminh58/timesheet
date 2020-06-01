import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { get } from 'lodash';

import { HelloWorld, Pokemon } from '@/components';
import * as Actions from '@/store/actions';
import './App.css';

class App extends Component {
  componentDidMount() {
    const { getListPokemon } = this.props;
    getListPokemon({ limit: 10, offset: 0 });
  }

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

  handleClickPokemon = data => {
    console.log(data);
  };

  render() {
    const { counter, listPokemon } = this.props;

    const data = get(listPokemon, 'result.results', []);
    return (
      <div className="App">
        <HelloWorld />
        {data.map(pokemon => (
          <Pokemon data={pokemon} key={pokemon.name} onClickPokemonItem={this.handleClickPokemon} />
        ))}
        <Pokemon />
      </div>
    );
  }
}

export default connect(
  state => ({
    counter: state.counter.counter,
    listPokemon: state.pokemon.listPokemon,
  }),
  dispatch => ({
    dispatch,
    ...bindActionCreators(Actions, dispatch),
  }),
)(App);
