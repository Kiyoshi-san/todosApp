import React from "react";
import { StyleSheet, View, Text } from "react-native";
import TodoForm from "../components/TodoForm";

// CRIANDO A STORE
// PROVIDER - REPONSAVEL PARA QUE TODOS OS NOSSOS COMPONENTES ACESSEM A STORE QDO QUISER
import { Provider } from "react_redux";

import { createStore } from "redux";

import rootReducer from "./reducers";

const store = createStore(rootReducer);


export default class TodoApp extends React.Component {
	render() {
		return (
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