import * as type from '../../constants/actionTypes';

const actionCreators = {
    deleteTaskRequest: (data) => ({
        type: type.DELETE_TASK,
        payload: data
    }),
    deleteTaskSuccess: (data) => ({
        type: type.DELETE_TASK_SUCCESS,
        payload: data
    }),
    deleteTaskError: (error) => ({
        type: type.DELETE_TASK_ERROR,
        payload: error
    }),
};

export default actionCreators;