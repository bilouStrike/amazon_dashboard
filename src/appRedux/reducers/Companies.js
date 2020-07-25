import {
  SET_CURRENT_COMPANY
} from '../../constants/ActionTypes';
 
const INITIAL_STATE = {
  currentCompany: null,
};

const companiesReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case SET_CURRENT_COMPANY:
        return {
          ...state,
          currentCompany: action.payload
        }
      default:
       return state;
   }
};
export default companiesReducer;
 