import configureStore from "./store/configureStore";
import {
  bugAdded,
  bugResolved,
  unresolvedBugsSelector,
  bugAssignedToUser,
  bugsByUserSelector,
} from "./store/bugs";
import { projectAdded } from "./store/projects";
import { usersAdded } from "./store/users";

const store = configureStore();

const action = store.subscribe(() => console.log("store changed"));

store.dispatch({
  type: "apiRequest",
  payload: {
    url: "/bugs",
    onSuccess: "bugsResived",
    onError: "bugsRequestFailed",
  },
});

// store.dispatch(bugAdded({ description: "first bug" }));
// store.dispatch(bugAdded({ description: "second bug" }));
// store.dispatch(bugAdded({ description: "third bug" }));
// store.dispatch(bugResolved({ id: 1 }));

// store.dispatch(projectAdded({ name: "project 1" }));
// store.dispatch(projectAdded({ name: "project 2" }));
// store.dispatch(projectAdded({ name: "project 3" }));

// store.dispatch(usersAdded({ name: "user 1" }));
// store.dispatch(usersAdded({ name: "user 2" }));

// store.dispatch(bugAssignedToUser({ bugId: 2, userId: 1 }));

// console.log(store.getState());

// const unresolvedBugs = unresolvedBugsSelector(store.getState());

// const usersBugs = bugsByUserSelector(2)(store.getState());
// console.log(usersBugs);
// const x = unresolvedBugsSelector(store.getState());
// const y = unresolvedBugsSelector(store.getState());

// console.log(x === y); //!true

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
