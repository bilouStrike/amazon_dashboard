import {
  SET_CURRENT_COMPANY,
  GET_COMPANIES_SUCCESS,
  GET_COMPANIES_FAILED,
  SET_COMPANIES
} from '../../constants/ActionTypes';
 
const INITIAL_STATE = {
  currentCompany: null,
  companies: []
};

const companiesReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case SET_CURRENT_COMPANY:
        return {
          ...state,
          currentCompany: action.payload
        }
      case GET_COMPANIES_SUCCESS:
        return {
          ...state,
          companies: action.payload
        }
      case GET_COMPANIES_FAILED:
        return {
          ...state,
          companies: action.payload
        }
      case SET_COMPANIES:
        return {
          ...state,
          companies: action.payload
      }
      default:
       return state;
   }
};
export default companiesReducer;
 