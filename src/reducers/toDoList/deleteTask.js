import * as actionTypes from '../../constants/actionTypes';

const initialState = {
    error: false,
    success: false,
};
export const deleteTask = (state = initialState, { type }) => {
    switch (type) {
    case actionTypes.DELETE_TASK: {
        return {
            ...state,
            success: false,
            error: false
        };
    }
        
    case actionTypes.DELETE_TASK_SUCCESS: {
        return {
            ...state,
            success: true,
        };
    }
        
    case actionTypes.DELETE_TASK_ERROR: {
        return { 
            ...state,
            error: true
        };
    }

    default:
        return state;
    }
};