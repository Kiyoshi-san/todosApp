import { adicTodo } FROM "../actions";

/* REDUCER - É UMA FUNÇÃO QUE RECEBE
- ESTADO ATUAL (STATE)
- ACTION
E DEVE DEVOLVER UM ESTADO (RETORNAR UM STATE)*/

const todoListReducer = (estado = [], adicTodo) => {
	switch(adicTodo.tipo){
		case ADIC_TODO:
			// ADICIONAR UM TODO
			const novoTodo = {
				texto: acao.texto
			}
			/*UNE OS ELEMENTOS DE UM ARRAY EM OUTRO - CRIANDO UM NOVO ARRAY
			var a = [1,2,3]
			var b = [5,6,7]
			[...a, ...b] === [1,2,3,5,6,7]*/
			return [...estado, novoTodo]
		default:
			return estado;
	}
}

export default todoListReducer;