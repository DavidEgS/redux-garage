import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect,  } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setCars } from '../actions';
import SideBar from '../components/SideBar'
import lewagon from '../images/logo_square.svg'


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
      <SideBar key="aside" garage={this.props.garage}>
        <Link to="/cars/new">Add a car</Link>
      </SideBar>,
      <div className="list-container" key="cars">
        {this.props.cars.map((car) => {
          return (
            <div key={car.id} className="car-smallad">
              <Link to={`/cars/${car.id}`} key={car.id} />
              <img className="car-logo" src={lewagon} alt="nice wagon" />
              <div className="car-details">
                <span>{car.brand} - {car.model}</span>
                <ul>
                  <li><strong>Owner:</strong> {car.owner}</li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )


  }

}function mapStateToProps(state) {
  return {
    cars: state.cars
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
