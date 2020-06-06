import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect,  } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCar } from '../actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setCar }, dispatch)
}

class CarsShow extends Component {
  componentDidMount() {
      if (!this.props.car) {
        this.props.setCar(this.props.match.params.id);
      }
    }

  render() {
    const car =this.props.car
    if(!car) {
      return( <div> Waiting... </div> )
    }
    return(
      <div>{this.props.car.owner}</div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const id = parseInt(ownProps.match.params.id, 10);
  const car = state.cars.find(car => car.id === id);
  return { car };
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
