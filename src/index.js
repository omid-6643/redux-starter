import configureStore from "./store/configureStore";
import * as actions from "./store/bugs";
import { projectAdded } from "./store/projects";

const store = configureStore();

store.subscribe(() => console.log("store changed"));

store.dispatch(actions.bugAdded({ description: "first bug" }));
store.dispatch(actions.bugAdded({ description: "second bug" }));
store.dispatch(actions.bugAdded({ description: "third bug" }));
store.dispatch(actions.bugResolved({ id: 1 }));

store.dispatch(projectAdded({ name: "project 1" }));
store.dispatch(projectAdded({ name: "project 2" }));
store.dispatch(projectAdded({ name: "project 3" }));

console.log(store.getState());

// import { bugAdded, bugResolved } from "./action";
// import store from "./store";

// console.log(store);

// store.dispatch(bugAdded("bug 1"));
// store.dispatch(bugResolved(1))

// const unsubscribe = store.subscribe(() => {
//   console.log("store change!", store.getState());
// });
// unsubscribe();

// store.dispatch({
//   type: actions.BUG_ADDED,
//   payload: {
//     description: "bug1",
//   },
// });

// store.dispatch({
//   type: "bugRemoved",
//   payload: {
//     id: 1,
//   },
// });

// console.log(store.getState());
