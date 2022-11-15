import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return { counter: state.counter };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => {
      dispatch({
        type: 'INCREMENT'
      })
    },
  }
}

function App(props) {
  const {onIncrement, counter} = props
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={onIncrement}>Click</button>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
