export const ADIC_TODO = "ADIC_TODO";
/*const adicTodo = texto => ({
	tipo: ADIC_TODO,
	texto 
});*/
// ACTION CREATOR
export const adicTodo = texto => {
	return ({
		tipo: ADIC_TODO,
		texto 
	});
}