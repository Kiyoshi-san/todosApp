import React from "react";
import { StyleSheet, View, Text } from "react-native";
import TodoForm from "../components/TodoForm";

// CRIANDO A STORE - VAMOS PASSAR TODAS AS NOSSAS REDUCERS AQUI NA CREATE STORE
import { createStore } from "redux";

import { Provider } from "react-redux";



// import rootReducer from "./reducers";
import rootReducer from "../reducers/index";

const store = createStore(rootReducer);

export default class TodoApp extends React.Component {
	render() {
		return (
			// É NECESSÁRIO ENVOLVER TODOS OS COMPONENTES QUE IRAO ACESSAR A STORE COM O PROVIDER - SEJA DESPACHAR ACTIONS OU LER A STORE - E PASSAMOS A STORE PARA ELE
			<Provider store={store}>
				<View style={estilo.container}>
					<TodoForm />
				</View>
			</Provider>
		);
	}
}

const estilo = StyleSheet.create ({
	container:{
		paddingTop:30
	}
});