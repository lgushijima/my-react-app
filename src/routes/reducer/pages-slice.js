// store/screensSlice.ts
import {createSlice} from '@reduxjs/toolkit';

const initialState = {};

const pagesSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    setPageState: (state, action) => {
      const {componentName, pageId, state: newState} = action.payload;

      if (!state[componentName]) state[componentName] = {};
      if (!state[componentName][pageId]) state[componentName][pageId] = {data: {}};

      state[componentName][pageId] = {
        ...(state[componentName][pageId] || {}),
        ...newState,
      };
    },
    removePageState: (state, action) => {
      const {componentName, pageId} = action.payload;

      if (state[componentName]) {
        delete state[componentName][pageId];
      }
    },
  },
});

export const {setPageState, removePageState} = pagesSlice.actions;
export const pagesReducer = pagesSlice.reducer;
