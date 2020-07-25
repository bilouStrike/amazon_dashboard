import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  HIDE_MESSAGE,
  SHOW_MESSAGE,
  DO_SIGNAL
} from '../../constants/ActionTypes'

const INIT_STATE = {
  error: "",
  loading: false,
  message: '',
  signal: false
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_START: {
      return {...state, error: '', message: '', loading: true};
    }
    case FETCH_SUCCESS: {
      return {...state, error: '', message: '', loading: false};
    }
    case SHOW_MESSAGE: {
      return {...state, error: '', message: action.payload, loading: false};
    }
    case FETCH_ERROR: {
      return {...state, loading: false, error: action.payload, message: ''};
    }
    case HIDE_MESSAGE: {
      return {...state, loading: false, error: '', message: ''};
    }
    case DO_SIGNAL: {
      return {...state, signal: !state.signal};
    }

    default:
      return state;
  }
}
