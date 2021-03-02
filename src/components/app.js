import React, { Component } from 'react';

import Formulario from "./Formulario";
import Lista from "./Lista";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        < Formulario />
        < Lista />
      </div>
    );
  }
}
