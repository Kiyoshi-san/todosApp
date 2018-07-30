import React from "react";
import { StyleSheet, View, Text } from "react-native";
import TodoForm from "../components/TodoForm";

export default class TodoApp extends React.Component {
	render() {
		return (
			<View style={estilo.container}>
				<TodoForm />
			</View>
		);
	}
}

const estilo = StyleSheet.create ({
	container:{
		paddingTop:30
	}
});