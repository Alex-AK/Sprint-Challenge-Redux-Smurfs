import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const GET_SMURFS = 'GET_SMURFS';
export const GET_SMURFS_COMPLETE = 'GET_SMURFS_COMPLETE';
export const GET_SMURFS_FAIL = 'GET_SMURFS_FAIL';

export const ADD_SMURF = 'ADD_SMURF';
export const ADD_SMURF_COMPLETE = 'ADD_SMURF_COMPLETE';
export const ADD_SMURF_FAIL = 'ADD_SMURF_FAIL';

export const UPDATE_SMURF = 'UPDATE_SMURF';
export const UPDATE_SMURF_COMPLETE = 'UPDATE_SMURF_COMPLETE';
export const UPDATE_SMURF_FAIL = 'UPDATE_SMURF_FAIL';

export const DELETE_SMURF = 'DELETE_SMURF';
export const DELETE_SMURF_COMPLETE = 'DELETE_SMURF_COMPLETE';
export const DELETE_SMURF_FAIL = 'DELETE_SMURF_FAIL';

export const getSmurfs = () => dispatch => {
  dispatch({
    type: GET_SMURFS
  });
  axios
    .get('http://localhost:3333/smurfs')
    .then(res =>
      dispatch({
        type: GET_SMURFS_COMPLETE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_SMURFS_FAIL,
        payload: err
      })
    );
};

export const addSmurf = smurf => dispatch => {
  dispatch({
    type: ADD_SMURF
  });
  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(res =>
      dispatch({
        type: ADD_SMURF_COMPLETE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: ADD_SMURF_FAIL,
        payload: err
      })
    );
};

export const deleteSmurf = id => dispatch => {
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_SMURF,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: DELETE_SMURF_FAIL,
        payload: err
      })
    );
};

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
