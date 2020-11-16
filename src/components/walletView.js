'use strict';
import React, { Component } from 'react';

class Card extends Component {
  render () {
    return <div class="card-container ">
      <h3 id="name"><label>Nombre: </label>{this.props.name}</h3>
      <p id="balance"><label>Balance: </label>{this.props.name}</p>
      <p id="allowance"><label>Permitido: </label>{this.props.allowance}</p>
    </div>;
  }
}

export default Card;
