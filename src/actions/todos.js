import API from 'goals-todos-api';
import showConnectionError from '../util/error';

// constants
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

// action creators
function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo
  };
}
function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id
  };
}
function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id
  };
}

// Thunk action creators
export function handleAddTodo(name, callback) {
  return dispatch => {
    return API.saveTodo(name)
      .then(todo => {
        dispatch(addTodo(todo));
        callback();
      })
      .catch(() => {
        showConnectionError();
      });
  };
}
export function handleDeleteTodo(todo) {
  return dispatch => {
    dispatch(removeTodo(todo.id));

    return API.deleteTodo(todo.id).catch(() => {
      showConnectionError();
      dispatch(addTodo(todo));
    });
  };
}
export function handleToggleTodo(id) {
  return dispatch => {
    dispatch(toggleTodo(id));

    return API.saveTodoToggle(id).catch(() => {
      showConnectionError();
      dispatch(toggleTodo(id));
    });
  };
}
