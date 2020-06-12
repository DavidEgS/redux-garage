import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect,  } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCar } from '../actions';
import SideBar from '../components/SideBar'
import lewagon from '../images/logo_square.svg'

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
      <div className="page">
      <SideBar garage={this.props.garage} >
        <Link to={``} > </Link>
      </SideBar>
      <div className="car-container" key="car">
        <div className="car-card">
          <img className="car-picture" src={lewagon} alt="car logo" />
          <div className="car-details">
            <span>{car.brand} - {car.model}</span>
            <ul>
              <li><strong>Owner:</strong> {car.owner}</li>
            </ul>
            <span className="plate">{car.plate}</span>
          </div>
          <button className="delete" onClick={this.handleClick}>
            <i className="fa fa-trash-o" aria-hidden="true"></i>
            Delete
          </button>
        </div>
      </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const id = parseInt(ownProps.match.params.id, 10);
  const car = state.cars.find(car => car.id === id);
  return { car };
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
