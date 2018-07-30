
// COMBINE REDUCERS ESTA SERVINOD PARA DELEGAR PEDAÇOS DE ESTADOS PRA CADA REDUCER
import { combineReducers } from "redux";

import todoListReducer from "./todoListReducer";

const rootReducer = combineReducers({
	todos: todoListReducer
});

export default rootReducer; 

