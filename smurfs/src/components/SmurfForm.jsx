import React from 'react';

const SmurfForm = props => {
  return (
    <div className="SmurfForm">
      <form onSubmit={props.addSmurf}>
        <input
          onChange={props.handleChange}
          placeholder="name"
          value={props.smurf.name}
          name="name"
        />
        <input
          onChange={props.handleChange}
          placeholder="age"
          value={props.smurf.age}
          name="age"
        />
        <input
          onChange={props.handleChange}
          placeholder="height"
          value={props.smurf.height}
          name="height"
        />
        <button type="submit">Add to the village</button>
      </form>
    </div>
  );
};

export default SmurfForm;
