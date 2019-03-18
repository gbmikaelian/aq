import { combineReducers } from 'redux';
import { getTasks } from './toDoList/getTasks';
import { addTask } from './toDoList/addTask';
import { deleteTask } from './toDoList/deleteTask';


const rootReducer = combineReducers({
    getTasks,
    addTask,
    deleteTask
});
  
export default rootReducer;
  