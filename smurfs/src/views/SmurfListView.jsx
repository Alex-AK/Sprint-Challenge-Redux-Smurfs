import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, deleteSmurf } from '../actions';

import SmurfCard from '../components/SmurfCard';

class SmurfListView extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  deleteSmurf = id => {
    this.props.deleteSmurf(id);
  };

  render() {
    const printSmurfCards = this.props.smurfs.map(smurf => (
      <SmurfCard
        key={smurf.name}
        smurf={smurf}
        deleteSmurf={this.deleteSmurf}
      />
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
    getSmurfs,
    deleteSmurf
  }
)(SmurfListView);
