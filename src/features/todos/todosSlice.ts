import { createSlice } from "@reduxjs/toolkit";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

let nextTodoId = 0;

const todosSlice = createSlice({
  name: "todos",
  initialState: [] as Todo[],
  reducers: {
    toggleTodo(state, action) {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    // You can customize the implementation of your action creator
    // by passing `reducer` and `prepare` field
    addTodo: {
      reducer(state, action) {
        const { id, text } = action.payload;
        state.push({ id, text, completed: false });
      },
      prepare(text) {
        // Adding unique `id`
        return { payload: { text, id: nextTodoId++ } };
      }
    },
  }
});

// Ducks pattern
export const { addTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
