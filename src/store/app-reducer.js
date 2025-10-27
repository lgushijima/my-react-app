import {combineReducers} from '@reduxjs/toolkit';
//import { api } from '../api';
import {authReducer} from '@/domains/auth/reducer/slice';
import {pagesReducer} from '@/routes/reducer/pages-slice';
import {tabsReducer} from '@/routes/reducer/tabs-slice';

export const appReducer = combineReducers({
  //[api.reducerPath]: api.reducer,
  auth: authReducer,
  pages: pagesReducer,
  tabs: tabsReducer,
});
