import http from '../../http';
import { call, put, takeLatest } from 'redux-saga/effects';
import actionCreators from '../../actions/toDoList/getTasks';

import * as actionTypes from '../../constants/actionTypes';

function* getTasks () {
    let response;
    try {
        response = yield call(http.get);
        yield put(actionCreators.getTasksSuccess(response.data));
    
    } catch (error) {
        yield put(actionCreators.getTasksError(error));
    }
}

export function* fetchTasks () {
    yield takeLatest(actionTypes.GET_TASKS, getTasks);
}