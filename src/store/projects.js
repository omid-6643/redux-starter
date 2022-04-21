import { createSlice } from "@reduxjs/toolkit";
let lastId = 0;

const slice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    projectAdded: (project, action) => {
      project.push({
        id: ++lastId,
        name: action.payload.name,
      });
    },
  },
});
console.log(slice);
export const { projectAdded } = slice.actions;
export default slice.reducer;
