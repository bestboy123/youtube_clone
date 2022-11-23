import { LOADING, GET_DATA, ERROR, CLICK_VIDEO } from '../action';

const YoutubeReducer = (state, action) => {
  switch (action.type) {
    case LOADING: {
      return {
        ...state,
        text: 'Loading',
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
        text: 'Error',
      };
    }

    case CLICK_VIDEO: {
      return {
        ...state,
        stt: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default YoutubeReducer;
