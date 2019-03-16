import API from 'goals-todos-api';

// constants
export const RECEIVE_DATA = 'RECEIVE_DATA';

// action creators
function receiveData(todos, goals) {
  return {
    type: RECEIVE_DATA,
    todos,
    goals
  };
}

// Thunk action creators
export function handleInitialData() {
  return dispatch => {
    return Promise.all([API.fetchTodos(), API.fetchGoals()])
      .then(([todos, goals]) => {
        dispatch(receiveData(todos, goals));
      })
      .catch(err => console.log(err));
  };
}
