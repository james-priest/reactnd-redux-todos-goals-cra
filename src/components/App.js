import React, { Component } from 'react';
import ConnectedTodos from './Todos';
import ConnectedGoals from './Goals';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(handleInitialData());
  }
  render() {
    if (this.props.loading === true) {
      return <h3>Loading...</h3>;
    }
    return (
      <div className="row">
        <ConnectedTodos />
        <ConnectedGoals />
      </div>
    );
  }
}

export default connect(store => ({
  loading: store.loading
}))(App);
