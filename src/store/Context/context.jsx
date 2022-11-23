import axios from 'axios';
import React, { useCallback, useEffect, useReducer } from 'react';
import {
  LOADING,
  GET_DATA,
  ERROR,
  CLICK_VIDEO,
  SET_SHOW,
  CHANGE_INPUT,
  KEY_DOWN,
  GET_DATA_SEARCH,
  CLICK_SEARCH,
  GET_DATA_ITEM,
} from '../action';
import { listURL, searchURL, itemURL } from '@/config/AppConst';
import YoutubeReducer from '../Reduce/reduce';
const context = React.createContext();

const initialState = {
  products: [],
  searchList: [],
  show: false,
  text: '',
  search: '',
  id: 'JHSRTU31T14',
  item: [],
  loading: false,
};

const YoutubeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(YoutubeReducer, initialState);

  const getAPI = async () => {
    dispatch({ type: LOADING });
    try {
      const data = await axios.get(listURL);
      dispatch({ type: GET_DATA, payload: data.data.items });
    } catch (error) {
      dispatch({ type: ERROR });
    }
  };

  useEffect(() => {
    getAPI();
  }, []);

  const getSearchAPI = useCallback(async () => {
    dispatch({ type: LOADING });
    try {
      const data = await axios.get(`${searchURL}${state.search}`);
      dispatch({ type: GET_DATA_SEARCH, payload: data.data.items });
    } catch (error) {
      dispatch({ type: ERROR });
    }
  }, [state.search]);

  useEffect(() => {
    getSearchAPI();
  }, [getSearchAPI]);

  const getItemAPI = useCallback(async () => {
    dispatch({ type: LOADING });
    try {
      const data = await axios.get(`${itemURL}${state.id}`);
      dispatch({ type: GET_DATA_ITEM, payload: data.data.items });
    } catch (error) {
      dispatch({ type: ERROR });
    }
  }, [state.id]);

  useEffect(() => {
    getItemAPI();
  }, [getItemAPI]);

  const clickVideo = (value) => {
    dispatch({ type: CLICK_VIDEO, payload: value });
  };

  const setShow = (value) => {
    dispatch({ type: SET_SHOW, payload: value });
  };

  const changeInput = (value) => {
    dispatch({ type: CHANGE_INPUT, payload: value });
  };

  const keyDown = (value) => {
    dispatch({ type: KEY_DOWN, payload: value });
  };

  const clickSearch = () => {
    dispatch({ type: CLICK_SEARCH });
  };

  return (
    <context.Provider
      value={{
        state,
        getAPI,
        clickVideo,
        setShow,
        changeInput,
        keyDown,
        getSearchAPI,
        clickSearch,
        getItemAPI,
      }}>
      {children}
    </context.Provider>
  );
};

export { context, YoutubeProvider };
