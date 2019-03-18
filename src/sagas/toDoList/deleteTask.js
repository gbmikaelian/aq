import http from '../../http';
import { call, put, takeLatest } from 'redux-saga/effects';
import deleteTaskActionCreators from '../../actions/toDoList/deleteTask';
import * as actionTypes from '../../constants/actionTypes';

function* deleteTask ({payload: {itemKey, data, catName}}) {
    try {
        let newData = [];
        if (data[catName] !== undefined) {
            newData = [...data[catName]];
            newData.splice(itemKey, 1);
        }
       
        const response = yield call(http.put, '', {...data, [catName]: newData});

        yield put(deleteTaskActionCreators.deleteTaskSuccess(response));
    } catch (error) {
        yield put(deleteTaskActionCreators.deleteTaskError(error));
    }
}

export function* fetchdeleteTask () {
    yield takeLatest(actionTypes.DELETE_TASK, deleteTask);
}