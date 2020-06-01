/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { get } from 'lodash';

const Pokemon = ({ data, onClickPokemonItem }) => (
  <div onClick={() => onClickPokemonItem(data)}>
    <h1>{get(data, 'name')}</h1>
  </div>
);

export default Pokemon;
