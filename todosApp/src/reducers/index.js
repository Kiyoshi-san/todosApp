
// COMBINE REDUCERS ESTA SERVINOD PARA DELEGAR PEDAÇOS DE ESTADOS PRA CADA REDUCER
import { combineReducers } from "redux";

import todoListReducer from "./todoListReducer";

import editingTodoReducer from "./editingTodoReducer";

const rootReducer = combineReducers({
	todos: todoListReducer,
	/*COLOCANDO UMA NOVA CHAVE DO STATE*/
	editingTodo: editingTodoReducer
});

export default rootReducer; 

