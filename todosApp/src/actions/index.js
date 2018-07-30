export const ADIC_TODO = "ADIC_TODO";
/*const adicTodo = texto => ({
	tipo: ADIC_TODO,
	texto 
});*/
// ACTION CREATOR
export const adicTodo = texto => {
	return ({
		type: ADIC_TODO,
		texto 
	});
}


export const TOGGLE_TODO = "TOGGLE_TODO";
export const toggleTodo = todoId => ({
	type: TOGGLE_TODO,
	todoId
});


/*CRIADO A ACTION PARA CONSEGUIRMOS TRANSFORMAR O COMPONENTE CONTROLADO COM STATE NO REACT PRA UM COMPONENTE CONTROLADO COM STATE NO REDUX - PRA PERMITIR O USUARIO EDITAR O TEXTO*/
export const SET_TODO_TEXT = "SET_TODO_TEXT";
export const setTodoText = texto => ({
	type: SET_TODO_TEXT,
	texto
});


export const EDITAR_TODO = "EDITAR_TODO";
export const editarTodo = todo => ({
	type: EDITAR_TODO,
	todo
});


export const UPDATE_TODO = "UPDATE_TODO";
export const updateTodo = todo => ({
	type: UPDATE_TODO,
	todo
});