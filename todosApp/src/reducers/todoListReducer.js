import { ADIC_TODO } from "../actions";

let proximoId = 1;

/* REDUCER - É UMA FUNÇÃO QUE RECEBE
- ESTADO ATUAL (STATE)
- ACTION
E DEVE DEVOLVER UM ESTADO (RETORNAR UM STATE)*/

const todoListReducer = (estado = [], acao) => {
	switch(acao.type){
		case ADIC_TODO:
			console.log("addTodo foi chamado!", acao.texto);
			// ADICIONAR UM TODO
			const novoTodo = {
				id: proximoId++,
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