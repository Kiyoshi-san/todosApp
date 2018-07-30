import { SET_TODO_TEXT, ADIC_TODO, EDITAR_TODO } from "../actions"

const INITIAL_STATE = {
	id: null,
	texto: "",
	done: false
}

const editingTodoReducer = (state = INITIAL_STATE, acao) => {
	switch (acao.type) {
		case SET_TODO_TEXT:
			/*CRIANDO UM NOVO OBJETO COM TODAS AS PROPRIEDADES QUE TEM NO MEU STATE*/
			return {
				...state,
				texto: acao.texto
			};
		case ADIC_TODO:
			// vai limpara o PEACE OF STATE EDITING_TODO - LIMPANDO O CAMPO DO INPUT
			return INITIAL_STATE;
		case EDITAR_TODO:
			/*VAI SOBRESCREVER SEJA LA O QUE ESTIVER NO MEU STATE*/
			return acao.todo;
		default:
			return state;
	}
}


export default editingTodoReducer;