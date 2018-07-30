import React from "react";
import { StyleSheet, TextInput } from "react-native";


// FUNCTIONAL COMPONENTS COM E SEM CORPO
// FUNCTIONAL COMPONENT COM CORPO
/*const Input = ({ textMudou, valor }) => {
	return (
		<TextInput
			style={estilo.input}
			onChangeText={textMudou}
			value={valor}
		/>
	)
};*/


// FUNCTIONAL COMPONENT SEM CORPO - PRA NAO TER QUE COLOCAR UM CORPO NA ARROW FUNCTION, FZ UM DESTRUCT ONDE ENVIA A PROPS - PQ
const Input = ({ textMudou, valor }) => (
	<TextInput
		style={estilo.input}
		onChangeText={textMudou}
		value={valor}
	/>
);

const estilo = StyleSheet.create({
	input: {
		paddingLeft: 15,
		paddingBottom: 15,
	}
});



export default Input;