/*
  Be sure to import in all of the action types from `../actions`
*/

import {
  GET_SMURFS,
  GET_SMURFS_COMPLETE,
  GET_SMURFS_FAIL,
  ADD_SMURF,
  ADD_SMURF_COMPLETE,
  ADD_SMURF_FAIL,
  DELETE_SMURF,
  DELETE_SMURF_COMPLETE,
  DELETE_SMURF_FAIL,
  UPDATE_SMURF,
  UPDATE_SMURF_COMPLETE,
  UPDATE_SMURF_FAIL
} from '../actions';

const initialState = {
  smurfs: [],
  isLoading: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS:
      return {
        ...state
      };
    default:
      return state;
  }
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
