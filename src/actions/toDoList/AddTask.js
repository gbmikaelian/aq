import * as type from '../../constants/actionTypes';

const actionCreators = {
    addTaskRequest: (data) => ({
        type: type.ADD_TASK,
        payload: data
    }),
    addTaskSuccess: (data) => ({
        type: type.ADD_TASK_SUCCESS,
        payload: data
    }),
    addTaskError: (error) => ({
        type: type.ADD_TASK_ERROR,
        payload: error
    }),
};

export default actionCreators;
