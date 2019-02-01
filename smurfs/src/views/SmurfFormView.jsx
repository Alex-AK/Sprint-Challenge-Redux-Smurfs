import React, { Component } from 'react';
import { connect } from 'react-redux';

import SmurfForm from '../components/SmurfForm';
import { addSmurf } from '../actions';

export class SmurfFormView extends Component {
  state = {
    smurf: {
      name: '',
      age: '',
      height: ''
    }
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      smurf: { ...this.state.smurf, [e.target.name]: e.target.value }
    });
  };

  addSmurf = e => {
    e.preventDefault();
    this.props.addSmurf(this.state.smurf);
    this.setState({
      smurf: {
        name: '',
        age: '',
        height: ''
      }
    });
  };

  render() {
    return (
      <div>
        <SmurfForm
          smurf={this.state.smurf}
          handleChange={this.handleChange}
          addSmurf={this.addSmurf}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { addSmurf }
)(SmurfFormView);
