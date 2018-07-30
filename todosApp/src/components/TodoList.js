import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { connect } from "react-redux";


/*const TodoList = ({todosArray = []}) => (
	<View>
		{todosArray.map(todo => <Text key={todo.id}>{todo.texto}</Text>)}
	</View>
);*/

const TodoList = ({ todos = [] }) => {
	return(
		<View>
			{ todos.map(todo => <Text key={ todo.id }>{ todo.texto }</Text>) }
		</View>
	);
};


const estilo = StyleSheet.create({

});


const mapStateToProps = state => {
	const { todos } = state;
	return { todos };
}

export default connect(mapStateToProps)(TodoList);