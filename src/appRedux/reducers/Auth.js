import {
   SIGNIN_FAILED,
   SIGNIN_SUCCESS,
   SIGNIN_START,
   SIGNOUT
} from '../../constants/ActionTypes';

const INITIAL_STATE = {
  isAuthenticated: false,
  role: null,
  user: null,
  error: null,
  agencyId: null,
  loading: false,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNIN_START:
      return {
        ...state,
        loading: true,
      };
    case SIGNIN_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        user: action.payload.username,
        role: action.payload.role,
        agencyId: action.payload.agencyId,
        isAuthenticated: true,
        error: null,
        loading: false,
      };
    case SIGNOUT:
      return {
        ...state,
        user: null,
        role: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
export default authReducer;
