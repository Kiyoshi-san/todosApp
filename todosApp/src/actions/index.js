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