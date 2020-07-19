import {
   
} from '../../constants/ActionTypes';
 
const INITIAL_STATE = {
   companies: null
};
 
const rolesReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
     case GET_ROLE_SUCCESS:
        return {
          ...state,
          loading: false,
          roles: action.payload,
        };
      case ADD_ROLE_START:
        return {
          ...state,
          loading: true,
        };
      case ADD_ROLE_SUCCESS:
      case EDIT_ROLE_SUCCESS:
         return {
          ...state, 
          roles: action.payload
         };
     default:
       return state;
   }
};
export default rolesReducer;
 