import React from 'react';
import './Card.css';
import { ReactComponent as Test } from '../images/main_hero.svg';

function Card() {
  return (
    <div class="card-container">
      <Test className="card-vector" />
      <h2>Testing Card</h2>
      <p>Learn React</p>
    </div>
  );
}

export default Card;