import {
    GET_PERMISSIONS_START,
    GET_PERMISSIONS_SUCCESS,
    GET_PERMISSIONS_FAILED,
} from '../../constants/ActionTypes';

const INITIAL_STATE = {
   permissions: null,
   loading: false,
};
 
const permissionsReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
    case GET_PERMISSIONS_SUCCESS:
        return {
            ...state,
            loading: false,
            permissions: action.payload,
        };      
    default:
       return state;
   }
};
export default permissionsReducer;
 