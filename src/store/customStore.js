import reducer from "./reducer";

function customStore(reducer) {
  let state;
  let listeners = [];

  function subscribe(listener) {
    listeners.push(listener);
  }

  function dispatch(action) {
    //call reducer to get new state
    state = reducer(state, action);
    //tell subscribe
    for (let i = 0; i < listeners.length; i++) {
      listeners[i]();
    }
  }

  function getState() {
    return state;
  }
  return { getState, dispatch, subscribe };
}

export default customStore(reducer);
