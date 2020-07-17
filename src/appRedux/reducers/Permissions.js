import {
    GET_PERMISSIONS_SUCCESS,
    ADD_PERMISSION_START,
    ADD_PERMISSION_SUCCESS,
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
    case ADD_PERMISSION_START:
        return {
            ...state,
            loading: true,
        };
    case ADD_PERMISSION_SUCCESS:
        return {
            ...state, 
            permissions: [...state.permissions, action.payload]
        };    
    default:
       return state;
   }
};
export default permissionsReducer;
 