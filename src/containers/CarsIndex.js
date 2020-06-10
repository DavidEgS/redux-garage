import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect,  } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setCars } from '../actions';
import SideBar from '../components/SideBar'


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setCars }, dispatch)
}

class CarsIndex extends Component {
  componentDidMount() {
    this.props.setCars();
  }

render() {
  const renderCars = this.props.cars.map((car) => {
    return (
    <Link to={`/cars/${car.id}`} key={car.owner}>
      <p>{car.brand}</p>
    </Link>
    )
  })

  return(
    <div className="page">
      <SideBar garage={this.props.garage} >
        <Link to={``} > </Link>
      </SideBar>
      <div>{renderCars}</div>
    </div>
  )


  }

}function mapStateToProps(state) {
  return {
    cars: state.cars
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
