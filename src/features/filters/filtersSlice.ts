import { createSlice } from '@reduxjs/toolkit';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};

const filtersSlice = createSlice({
  name: 'visiblityFilters',
  initialState: VisibilityFilters.SHOW_ALL,
  reducers: {
    setVisibilityFIlter(_, action) {
      return action.payload;
    }
  }
});

export const { setVisibilityFIlter } = filtersSlice.actions;
export default filtersSlice.reducer;
