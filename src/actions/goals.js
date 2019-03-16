import API from 'goals-todos-api';
import showConnectionError from '../util/error';

// constants
export const ADD_GOAL = 'ADD_GOAL';
export const REMOVE_GOAL = 'REMOVE_GOAL';

// action creators
function addGoal(goal) {
  return {
    type: ADD_GOAL,
    goal
  };
}
function removeGoal(id) {
  return {
    type: REMOVE_GOAL,
    id
  };
}

// Thunk action creators
export const handleAddGoal = (name, callback) => dispatch => {
  return API.saveGoal(name)
    .then(goal => {
      dispatch(addGoal(goal));
      callback();
    })
    .catch(() => showConnectionError());
};
export const handleDeleteGoal = goal => dispatch => {
  dispatch(removeGoal(goal.id));

  return API.deleteGoal(goal.id).catch(() => {
    showConnectionError();
    dispatch(addGoal(goal));
  });
};
