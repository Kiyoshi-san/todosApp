
// COMBINE REDUCERS ESTA SERVINOD PARA DELEGAR PEDAÇOS DE ESTADOS PRA CADA REDUCER
import { combineReducers } from "redux";

import todoListReducer from "./todoListReducer";

import editingTodoReducer from "./todoListReducer";

const rootReducer = combineReducers({
	todos: todoListReducer,
	editingTodo: editingTodoReducer
});

export default rootReducer; 

