// store/tabsSlice.ts
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  openTabs: [],
};

const tabsSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    openTab: (state, action) => {
      const exists = state.openTabs.some(t => t.type === action.payload.type && t.id === action.payload.id);
      if (!exists) state.openTabs.push(action.payload);
      state.activeTab = action.payload;
    },
    closeTab: (state, action) => {
      state.openTabs = state.openTabs.filter(t => !(t.type === action.payload.type && t.id === action.payload.id));
      if (state.activeTab?.type === action.payload.type && state.activeTab?.id === action.payload.id) {
        state.activeTab = state.openTabs[state.openTabs.length - 1];
      }
    },
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});

export const {openTab, closeTab, setActiveTab} = tabsSlice.actions;
export const tabsReducer = tabsSlice.reducer;
