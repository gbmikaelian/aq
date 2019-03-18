import http from '../../http';
import { call, put, takeLatest } from 'redux-saga/effects';
import actionCreators from '../../actions/toDoList/AddTask';
import * as actionTypes from '../../constants/actionTypes';

function* addTask ({payload: {taskName, data, catName}}) {
    try {
        let newData = [];
        if (data[catName] !== undefined) {
            newData = [...data[catName]];
        }            
        newData.push(taskName);

       
        const response = yield call(http.put, '', {...data, [catName]: newData});

        yield put(actionCreators.addTaskSuccess(response));
    
    } catch (error) {
        yield put(actionCreators.addTaskError(error));
    }
}

export function* fetchAddTask () {
    yield takeLatest(actionTypes.ADD_TASK, addTask);
}