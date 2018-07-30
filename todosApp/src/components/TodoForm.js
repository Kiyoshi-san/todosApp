import React from "react";
import { StyleSheet, ScrollView, View, Button } from "react-native";
import { connect } from "react-redux";

import { adicTodo, setTodoText } from "../actions";

import Input from "./Input";

class TodoForm extends React.Component {
	// VAMOS COLOCAR O STATE PARA GUARDAR O VALOR DO INPUT, DO QUE O USUARIO DIGITAR
	
	/*COM O STATE DO REDUX NAO PRECISA MAIS DESSE*/
	/*constructor(props) {
		super(props);

		this.state = {
			texto: ""
		}
	}*/

	fn_mudouTexto(texto) {
		console.log("mudou");
		
		/*COM O STATE DO REDUX NAO PRECISA MAIS DESSE*/
		/*this.setState({
			texto: texto
			texto
		});*/
		this.props.dispatchSetTodoText(texto);
	}

	fn_apertou() {
		// const { texto } = this.state;
		// console.log("apertou");
		/*DEVEMOS COLOCAR UM DISPATCH DE UMA ACTION - PARA SER ENVIADO ASSIM QUE CLICAR NO BOTAO - PRA ISSO PRECISAMOS ESTAR COM O NOSSO COMPONENTE BOTAO CONECTADO COM O REDUX
		import { connect } from "react-redux";*/


		/*COM O STATE DO REDUX NAO PRECISA MAIS DESSE*/
		// this.props.dispatchAddTodo(this.state.texto);
		const { texto } = this.props.editingtodo;
		this.props.dispatchAddTodo(texto);

		/*COM O STATE DO REDUX NAO PRECISA MAIS DESSE*/
		// this.setState({ texto: "" });
		// this.props.dispatchSetTodoText("");
	}

	render() {
		/*COM O STATE DO REDUX NAO PRECISA MAIS DESSE*/
		/*const { texto } = this.state;*/
		const { texto } = this.props.editingtodo;
		return(
			<View style={estilo.formContainer}>
				<View style={estilo.inputContainer}>
					<Input 
						textMudou={ texto => this.fn_mudouTexto(texto) }
						valor={ texto }
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
});

// VAMOS PASSAR PARA O COMPONENTE UMA FUNÇÃO QUE VAI ADICIONAR UM TODO
/*const mapDispatchToProps = dispatch => {
	return({
		dispatchAddTodo: texto => dispatch(adicTodo(texto))
	});
}*/

// carrying
/* PRECISAMOS PASSAR 2 FUNÇÕES PARA O CONNECT
- mapStateToProps
	- QDO QUEREMOS LER ALGO DA STATE
		- NESSE CASO NÃO QUEREMOS, PORTANTO PASSAREMOS "null"
- mapDispatchToProps
	- QDO QUEREMOS FAZER ALGUM DISPATCH
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);*/
/*export default connect(null, mapDispatchToProps)(TodoForm);
OU*/

const mapStateToProps = state => {
	return {
		editingtodo: state.editingTodo
	}
}
export default connect(
	mapStateToProps,
	{
		dispatchAddTodo: adicTodo,
		dispatchSetTodoText: setTodoText
	}
)(TodoForm);

