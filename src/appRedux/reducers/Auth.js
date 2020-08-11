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
  id: null,
  error: null,
  agencyId: null,
  companyId: null,
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
        user: action.payload[0].username,
        userRoles: action.payload[0].roles,
        agencyId: action.payload[0].agencyId,
        companyId: action.payload[0].companyId,
        isAuthenticated: true,
        error: null,
        id: action.payload[0].id,
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
        id: null,
        companies: [],
      };
    default:
      return state;
  }
};
export default authReducer;
