import * as actionTypes from '../../constants/actionTypes';

const initialState = {
    error: false,
    success: false
};
export const addTask = (state = initialState, { type, payload }) => {
    switch (type) {
    case actionTypes.ADD_TASK: {
        return {
            ...state,
            success: false,
            error: false,
        };
    }
        
    case actionTypes.ADD_TASK_SUCCESS: {
        return {
            ...state,
            success: true
        };
    }
        
    case actionTypes.ADD_TASK_ERROR: {
        return {
            ...state,
            error: true,
            success: false,
            errorMessage: payload.message,
        };
    }

    default:
        return state;
    }
};