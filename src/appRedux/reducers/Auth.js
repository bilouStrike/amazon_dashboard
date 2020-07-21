import {
   SIGNIN_FAILED,
   SIGNIN_SUCCESS,
   SIGNIN_START,
   SIGNOUT
} from '../../constants/ActionTypes';

const INITIAL_STATE = {
  isAuthenticated: false,
  userRoles: [],
  user: null,
  error: null,
  agencyId: null,
  companyId: [],
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
        user: action.payload[0].name,
        userRoles: action.payload[0].roles,
        agencyId: action.payload[0].agencyId,
        isAuthenticated: true,
        error: null,
        loading: false,
      };
    case SIGNOUT:
      return {
        ...state,
        isAuthenticated: false,
        userRoles: [],
        user: null,
        error: null,
        agencyId: null,
        companyId: [],
      };
    default:
      return state;
  }
};
export default authReducer;
