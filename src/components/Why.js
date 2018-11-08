import React, { Component } from 'react';
import { Container, Button } from 'mdbreact';


class Why extends Component {
  render() {
    return (
      <div className="view-height" id="inicio">
        <Container className="text-center">
          <div className="pt-5">
            <h2 className="title">¿Por qué tener un seguro de hogar RIMAC?</h2>
            <p>Esto no es un gasto, es una inversión.</p>
            <p>¡Además recibe armado y limpieza de muebles y más!</p>
          </div>
        </Container>
      </div>
    );
  }
}

export default Why;