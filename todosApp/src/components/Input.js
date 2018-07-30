import React from "react";
import { StyleSheet, TextInput } from "react-native";


// FUNCTIONAL COMPONENTS COM E SEM CORPO
// FUNCTIONAL COMPONENT COM CORPO
/*const Input = ( textMudado, valorRecebido ) => {
	return (
		<TextInput
			style={estilo.input}
			onChangeText={textMudado}
			value={valorRecebido}
		/>
	)
};*/


// FUNCTIONAL COMPONENT SEM CORPO - PRA NAO TER QUE COLOCAR UM CORPO NA ARROW FUNCTION, FZ UM DESTRUCT ONDE ENVIA A PROPS - PQ
const Input = ({ onChangeText, value }) => (
	<TextInput
		style={estilo.input}
		onChangeText={onChangeText}
		value={value}
	/>
);

const estilo = StyleSheet.create({
	input: {
		paddingLeft: 15,
		paddingBottom: 15,
	}
});



export default Input;