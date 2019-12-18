import { createSlice } from "@reduxjs/toolkit";

// Or you can use `slice` thing. The doc says:
// in most apps, you won't need to use them yourself - createSlice is all you need.
// https://redux-toolkit.js.org/tutorials/intermediate-tutorial#understanding-slices
export const { name, reducer, actions } = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => state++,
    decrement: state => state--,
  },
})

// Monstrous syntax...
export const { increment, decrement } = actions;


// The doc defines the term "slice" as a key of the root reducer. Such as:
// {
//   accounts: () => {/* Reducer */}
//   statuses: () => {/* Reducer */}
//   media:    () => {/* Reducer */}
// }
