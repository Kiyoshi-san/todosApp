import { SET_TODO_TEXT } from "../actions"

const SET_TODO_TEXT = {
	id: null,
	texto: "",
	done: false
}

const editingTodoReducer = (state = { INITIAL_STATE }, acao) {
	switch (acao.type) {
		case SET_TODO_TEXT:
			/*CRIANDO UM NOVO OBJETO COM TODAS AS PROPRIEDADES QUE TEM NO MEU STATE*/
			...state,
			texto: acao.texto
		default:
			return state;
	}
}


export default 