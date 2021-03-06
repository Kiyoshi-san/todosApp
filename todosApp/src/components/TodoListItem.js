import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

/*const TodoListItem = props => {
	const { todo } = props;
	return (
		<TouchableOpacity onPress={() => { apertouTodo }}>
			<View style={estilo.line}>
				<Text style={estilo.lineText}>
					{ todo.texto }
				</Text>
			</View>
		</TouchableOpacity>
	);
}
OU*/

const TodoListItem = ({ todo, apertouTodo, cliqueLongo }) => (
	<TouchableOpacity 
		onPress={ apertouTodo }
		onLongPress={cliqueLongo}
	>
		<View style={estilo.line}>
			<Text style={[
				estilo.lineText,
				todo.done ? estilo.lineThrough : null
			]}>
				{ todo.texto }
			</Text>
		</View>
	</TouchableOpacity>
);


const estilo = StyleSheet.create({
	line:{
		height: 60,
		borderBottomWidth: 1,
		borderBottomColor: "#bbb",
		
		alignItems: "center",
		flexDirection: "row",
	},
	lineText:{
		fontSize: 20,
		paddingLeft: 15,
		flex: 7,
	},
	lineThrough: {
		textDecorationLine: "line-through"
	}
});

export default TodoListItem;