import {useDispatch, useSelector} from 'react-redux';
import {setPageState} from '@/routes/reducer/pages-slice';
import {useCallback, useEffect} from 'react';

export const usePageState = (componentName, pageId, initialState = {}) => {
  const dispatch = useDispatch();

  //-- get componente state from the store
  const stateData = useSelector(state => state.pages?.[componentName]?.[pageId]?.data ?? initialState);

  //-- function to save the current data into the store
  const setStateData = useCallback(
    newData => {
      dispatch(
        setPageState({
          componentName,
          pageId,
          state: {data: {...stateData, ...newData}},
        }),
      );
    },
    [dispatch, componentName, pageId, stateData],
  );

  return [stateData, setStateData, pageId];
};
