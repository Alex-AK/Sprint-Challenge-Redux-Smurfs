import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';

import SmurfCard from '../components/SmurfCard';

class SmurfListView extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    const printSmurfCards = this.props.smurfs.map(smurf => (
      <SmurfCard key={smurf.name} smurf={smurf} />
    ));
    // console.log(this.props.smurfs);
    return <div className="smurf-cards">{printSmurfCards}</div>;
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  {
    getSmurfs
  }
)(SmurfListView);
