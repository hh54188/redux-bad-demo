import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return { name: state.user.name };
}

const mapDispatchToProps = (dispatch) => {
  return {
    // Can I use callback here? Even I use thunk?
    // Or can I use side effect here?
    fetchUser: () => {
      dispatch({
        type: 'FETCH_START'
      });
      fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(({ results }) => {
          const [{ name }] = results;
          dispatch({
            type: 'FETCH_END',
            name,
          });
        })
    },
  }
}

function App(props) {
  const { fetchUser,  name} = props
  return (
    <div className="App">
      <h1>First Name: {name}</h1>
      <button onClick={fetchUser}>Click</button>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
