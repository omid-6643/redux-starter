import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
//! action types

// const BUG_ADDED = "bugAdded";
// const BUG_REMOVED = "bugRemoved";
// const BUG_RESOLVED = "bugResolved";

//! create slice
let lastId = 0;

const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    //action => action handlers
    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugResolved: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs[index].resolved = true;
    },
    bugAssignedToUser: (bugs, action) => {
      const { bugId, userId } = action.payload;
      const index = bugs.findIndex((bug) => bug.id === bugId);
      bugs[index].userId = userId;
    },
  },
});

// console.log(slice);

export const { bugAdded, bugResolved, bugAssignedToUser } = slice.actions;
export default slice.reducer;

//! selector
// export const unresolvedBugsSelector = (state) =>
//   state.entites.bugs.filter((bug) => !bug.resolved);

//! memorzation
export const unresolvedBugsSelector = createSelector(
  (state) => state.entites.bugs,
  (state) => state.entites.projects,
  (bugs, projects) => bugs.filter((bug) => !bug.resolved)
);

export const bugsByUserSelector = (userId) =>
  createSelector(
    (state) => state.entites.bugs,
    (bugs) => bugs.filter((bug) => bug.userId === userId)
  );

//!action creators

// export const bugAdded = createAction("bugAdded");
// export const bugResolved = createAction("bugResolved");
// export const bugRemoved = createAction("bugRemoved");

// export function bugAdded(description) {
//   return {
//     type: actions.BUG_ADDED,
//     payload: {
//       description: "bug1",
//     },
//   };
// }

//!reducer

// export default createReducer([], {
//!key-value
//!action: function (event => event handler)
//   [bugAdded.type]: (bugs, action) => {
//     bugs.push({
//       id: ++lastId,
//       description: action.payload.description,
//       resolve: false,
//     });
//   },
//   [bugResolved.type]: (bugs, action) => {
//     const index = bugs.findIndex((bug) => bug.id === action.payload.id);
//     bugs[index].resolve = true;
//   },
// });

// export default function reducer(state = [], action) {
//   switch (action.type) {
//     case bugAdded.type:
//       return [
//         ...state,
//         {
//           id: ++lastId,
//           description: action.payload.description,
//           resolve: false,
//         },
//       ];
//     case bugRemoved.type:
//       return state.filter((bug) => bug.id !== action.payload.id);

//     case bugResolved.type:
//       return state.map((bug) =>
//         bug.id !== action.payload.id ? bug : { ...bug, resolve: true }
//       );

//     default:
//       return state;
//   }
//   if (action.type === "bugAdded") {
//     return [
//       ...state,
//       {
//         id: ++lastId,
//         description: action.payload.description,
//         resolved: false,
//       },
//     ];
//   } else if (action.type === "bugRemoved") {
//     return state.filter((bug) => bug.id !== action.payload.id);
//   }
//   return state;
// }
