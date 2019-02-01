import React from 'react';

const SmurfCard = props => {
  return (
    <div className="smurf-card">
      <h1>{props.smurf.name}</h1>
      <p>{props.smurf.age}</p>
      <p>{props.smurf.height}</p>
      <button onClick={() => props.deleteSmurf(props.smurf.id)}>Delete</button>
    </div>
  );
};

export default SmurfCard;
