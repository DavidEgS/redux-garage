import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createCar } from '../actions';

class CarsForm extends Component {
  onSubmit = (values) => {
    this.props.createPost(values, (post) => {
    this.props.history.push('/'); // Navigate after submit
    return post;
  });
}
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>

      </form>
      )
  }
}


export default reduxForm({ form: 'newCarForm' })(
connect(null, { createCar })(CarsForm)
);
