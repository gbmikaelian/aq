import * as type from '../../constants/actionTypes';

const actionCreators = {
    getTasksRequest: () => ({
        type: type.GET_TASKS,
        payload: {}
    }),
    getTasksSuccess: (data) => {
        return {
            type: type.GET_TASKS_SUCCESS,
            payload: data
        };
    },
    getTasksError: (error) => ({
        type: type.GET_TASKS_ERROR,
        payload: error
    }),
};

export default actionCreators;
