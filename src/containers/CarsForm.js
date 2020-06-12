import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createCar } from '../actions';
import { Link } from 'react-router-dom';
import SideBar from '../components/SideBar'

class CarsForm extends Component {
  onSubmit = (values) => {
    this.props.createCar(values, (car) => {
    this.props.history.push('/'); // Navigate after submit
    return car;
  });
}
renderField(field) {
  return (
    <div className="form-group">
    <label>{field.label}</label>
    <input
      className="form-control"
      type={field.type}
      {...field.input}
    />
    </div>
  );
}
  render() {
    return (
        <div>
          <SideBar garage={this.props.garage} >
            <Link to={``} > </Link>
          </SideBar>
           <div key="add" className="form-container" style={{ backgroundImage: "url('/assets/images/form.jpg')"}}>
            <div className="overlay"></div>
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
              <Field
                label="brand"
                name="brand"
                type="text"
                component={this.renderField}

              />
              <Field
                label="model"
                name="model"
                type="text"
                component={this.renderField}
              />
              <Field
                label="owner"
                name="owner"
                type="text"
                component={this.renderField}
              />
              <Field
                label="plate"
                name="plate"
                type="text"
                component={this.renderField}
              />
              <button className="btn btn-danger" type="submit"
                disabled={this.props.pristine || this.props.submitting}>
                Add a car
              </button>

            </form>
          </div>
        </div>
      )
  }
}


export default reduxForm({ form: 'newCarForm' })(
connect(null, { createCar })(CarsForm)
);
