import {
    GET_SERVICES_SUCCESS,
} from '../../constants/ActionTypes';

const INITIAL_STATE = {
   services: null,
};

const servicesReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
    case GET_SERVICES_SUCCESS:
        return {
            ...state,
            services: action.payload,
        };     
    default:
       return state;
   }
};
export default servicesReducer;
 