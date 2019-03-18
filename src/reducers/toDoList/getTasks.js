import * as actionTypes from '../../constants/actionTypes';

const initialState = {
    error: false,
    success: null,
    errorMessage: '',
    taskList: {cons: [], pros: []}
};

export const getTasks = (state = initialState, { type, payload }) => {
    switch (type) {
    case actionTypes.GET_TASKS: {
            
        return {
            success: false,
            ...state
        };
    }

    case actionTypes.GET_TASKS_SUCCESS: {
        return {
            ...state,
            success: true,
            taskList: payload
        };
    }
        
    case actionTypes.GET_TASKS_ERROR: {
        const error = {...payload};
        let response = {
            ...state,
            error: true,
            success: false,
            errorMessage: payload.message,
        };

        if (error.response && error.response.status === 404) {
            return {
                ...response,
                error: false,
                taskList: { cons: [], pros: [] }                
            };    
        }
        return response;
    }

    default:
        return state;
    }
};