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

const YoutubeReducer = (state, action) => {
  switch (action.type) {
    case LOADING: {
      return {
        ...state,
      };
    }

    case GET_DATA: {
      return {
        ...state,
        products: action.payload,
      };
    }

    case ERROR: {
      return {
        ...state,
      };
    }

    case CLICK_VIDEO: {
      return {
        ...state,
        id: action.payload,
      };
    }

    case SET_SHOW: {
      return {
        ...state,
        show: !action.payload,
      };
    }

    case CHANGE_INPUT: {
      return {
        ...state,
        text: action.payload,
      };
    }

    case KEY_DOWN: {
      if (action.payload === 13 && state.text !== '') {
        return {
          ...state,
          search: state.text,
        };
      } else {
        return {
          ...state,
        };
      }
    }

    case GET_DATA_SEARCH: {
      return {
        ...state,
        searchList: action.payload,
      };
    }

    case GET_DATA_ITEM: {
      return {
        ...state,
        item: action.payload,
      };
    }

    case CLICK_SEARCH: {
      return {
        ...state,
        search: state.text,
      };
    }

    default: {
      return state;
    }
  }
};

export default YoutubeReducer;
