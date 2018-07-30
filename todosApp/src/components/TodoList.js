import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { connect } from "react-redux";

import TodoListItem from "./TodoListItem";

import { toggleTodo } from "../actions";

/*const TodoList = ({ todos, dispatchToggleTodo }) => (
	<View>
		{todos.map(todo => <Text key={todo.id}>{todo.texto}</Text>)}
	</View>
);*/

const TodoList = ({ todos, dispatchToggleTodo }) => {
	return(
		<View>
			{/* todos.map(todo => <Text key={ todo.id }>{ todo.texto }</Text>) */}
			{ todos.map(todo => (
				<TodoListItem 
					key={ todo.id }
					todo={todo}
					apertouTodo={() => dispatchToggleTodo(todo.id)}
				/>
			))}
		</View>
	);
};


const estilo = StyleSheet.create({

});


const mapStateToProps = state => {
	const { todos } = state;
	return { todos };
}

export default connect(
	mapStateToProps,
	{ dispatchToggleTodo: toggleTodo }
)(TodoList);