// src/hooks/usePageState.ts
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {setPageState} from '@/routes/reducer/pages-slice';
import {useCallback, useEffect} from 'react';

export const usePageState = (componentName, initialState = {}) => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const pageId = id || 'new';

  const emptyData = {};

  //-- get componente state from the store
  const stateData = useSelector(state => state.pages?.[componentName]?.[pageId]?.data ?? emptyData);

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

  useEffect(() => {
    if (!Object.keys(stateData).length) {
      setStateData(initialState);
    }
  }, [pageId]);

  return [stateData, setStateData, pageId];
};
