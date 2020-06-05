import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class CarsIndex extends Component {
  renderCars() {

  }

  render() {
    return (
      <div>Cars</div>
      )
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars
  }
}

export default connect(mapStateToProps)(CarsIndex);
