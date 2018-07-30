import React from "react";
import { StyleSheet, View, Button } from "react-native";
import Input from "./Input";

export default class TodoForm extends React.Component {
	// VAMOS COLOCAR O STATE PARA GUARDAR O VALOR DO INPUT, DO QUE O USUARIO DIGITAR
	constructor(props) {
		super(props);

		this.state = {
			texto: ""
		}
	}

	fn_mudouTexto(texto) {
		console.log("mudou");
		this.setState({
			/*texto: texto*/
			texto
		});
	}

	fn_apertou() {
		const { texto } = this.state;
		console.log("apertou");
	}

	render() {
		const { texto } = this.state;
		return(
			<View style={estilo.formContainer}>
				<View style={estilo.inputContainer}>
					<Input 
						onChangeText={ texto => this.fn_mudouTexto(texto) }
						value={ texto }
					/>
				</View>
				<View style={estilo.botaoContainer}>
					<Button
						onPress={() => this.fn_apertou()}
						title="Adicionar"
					/>
				</View>
			</View>
		);
	}
}

const estilo = StyleSheet.create({
	formContainer:{
		flexDirection: "row",
	},
	inputContainer:{
		flex: 5,
	},
	botaoContainer:{
		flex: 3,
	},
})