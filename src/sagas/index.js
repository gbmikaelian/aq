import {all} from 'redux-saga/effects';
import { fetchTasks } from './toDoList/getTasks';
import { fetchAddTask } from './toDoList/addTask';
import { fetchdeleteTask } from './toDoList/deleteTask';

export default function* () {
    yield all([
        fetchTasks(),
        fetchAddTask(),
        fetchdeleteTask()
    ]);
}