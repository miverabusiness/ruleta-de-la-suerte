import React, { Component } from "react";
import "./Panel.css";
import Card from "../card/Card";

const N_FILAS = 4;
const FILA_CORTA = 12;
const FILA_LARGA = 14;

let panel = [];

for (let i = 0; i < N_FILAS; i++) {
	if (i === 0 || i === N_FILAS - 1) {
		panel.push(Array(FILA_CORTA).fill(" "));
	} else {
		panel.push(Array(FILA_LARGA).fill(" "));
	}
}

class Panel extends Component {
	constructor(props) {
		super(props);

		this.state = {
			inputValue1: "",
			inputValue2: "",
			inputValue3: "",
			inputValue4: "",
			savedValue1: null,
			savedValue2: null,
			savedValue3: null,
			savedValue4: null,
			inputLetter: "",
			savedLetter: null,
			filas: this.initialPanel(),
		};

		this.initialPanel();
	}

	initialPanel = () => {
		let filas = [];
		for (let i = 0; i < N_FILAS; i++) {
			const cards = [];
			const longitudFila = i === 0 || i === N_FILAS - 1 ? FILA_CORTA : FILA_LARGA;

			for (let j = 0; j < longitudFila; j++) {
				cards.push(<Card key={j} letra={panel[i][j]} estado=" space" mostrarLetra={false} />);
			}

			filas.push(
				<div className="fila" key={i}>
					{cards}
				</div>
			);
		}

		return filas;
	};

	handleChange1 = (event) => {
		if (event.target.value.toUpperCase().match(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/) || event.target.value == "") {
			this.setState({ inputValue1: event.target.value.toUpperCase() });
		}
	};

	handleChange2 = (event) => {
		if (event.target.value.toUpperCase().match(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/) || event.target.value == "") {
			this.setState({ inputValue2: event.target.value.toUpperCase() });
		}
	};

	handleChange3 = (event) => {
		if (event.target.value.toUpperCase().match(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/) || event.target.value == "") {
			this.setState({ inputValue3: event.target.value.toUpperCase() });
		}
	};

	handleChange4 = (event) => {
		if (event.target.value.toUpperCase().match(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/) || event.target.value == "") {
			this.setState({ inputValue4: event.target.value.toUpperCase() });
		}
	};

	handleChangeLetter = (event) => {
		if (event.target.value.toUpperCase().match("^[A-ZñÑ]*$") != null) {
			this.setState({ inputLetter: event.target.value.toUpperCase() });
		}
	};

	handleSaveLetter = () => {
		const { inputLetter } = this.state;
		this.setState({ savedLetter: inputLetter.toUpperCase() });
		console.error("SAVED: ", inputLetter);
		console.error("PANEL: ", panel);
		let filas = [];
		for (let i = 0; i < N_FILAS; i++) {
			const cards = [];
			const longitudFila = i === 0 || i === N_FILAS - 1 ? FILA_CORTA : FILA_LARGA;

			for (let j = 0; j < longitudFila; j++) {
				let status,
					mostrar = false;
				if (
					panel[i][j].texto.toUpperCase() == inputLetter ||
					panel[i][j].texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "") == inputLetter
				) {
					status = " correct";
					mostrar = true;
					panel[i][j].show = true;
				} else if (panel[i][j].texto != " ") {
					status = " not-yet";
				} else {
					status = " space";
				}
				cards.push(
					<Card key={j} letra={panel[i][j].texto} estado={panel[i][j].show ? " correct" : status} mostrarLetra={panel[i][j].show} />
				);
			}

			filas.push(
				<div className="fila" key={i}>
					{cards}
				</div>
			);
		}

		this.setState({ filas });
	};

	handleSave = () => {
		const { inputValue1, inputValue2, inputValue3, inputValue4 } = this.state;
		let arrayLetras1 = Array(FILA_CORTA)
			.fill(null)
			.map(() => ({ texto: " ", show: false }));
		let arrayLetras2 = Array(FILA_LARGA)
			.fill(null)
			.map(() => ({ texto: " ", show: false }));
		let arrayLetras3 = Array(FILA_LARGA)
			.fill(null)
			.map(() => ({ texto: " ", show: false }));
		let arrayLetras4 = Array(FILA_CORTA)
			.fill(null)
			.map(() => ({ texto: " ", show: false }));
		const texto1 = Array.from(inputValue1.toUpperCase());
		const texto2 = Array.from(inputValue2.toUpperCase());
		const texto3 = Array.from(inputValue3.toUpperCase());
		const texto4 = Array.from(inputValue4.toUpperCase());

		for (let i = 0; i < texto1.length; i++) {
			arrayLetras1[i].texto = texto1[i];
		}

		for (let i = 0; i < texto2.length; i++) {
			arrayLetras2[i].texto = texto2[i];
		}

		for (let i = 0; i < texto3.length; i++) {
			arrayLetras3[i].texto = texto3[i];
		}

		for (let i = 0; i < texto4.length; i++) {
			arrayLetras4[i].texto = texto4[i];
		}

		this.setState({
			savedValue1: arrayLetras1,
			savedValue2: arrayLetras2,
			savedValue3: arrayLetras3,
			savedValue4: arrayLetras4,
		});
		console.error("Arrayletras", arrayLetras1);

		panel[0] = arrayLetras1;
		panel[1] = arrayLetras2;
		panel[2] = arrayLetras3;
		panel[3] = arrayLetras4;

		console.error("PANEL: ", panel);

		let filas = [];
		for (let i = 0; i < N_FILAS; i++) {
			const cards = [];
			const longitudFila = i === 0 || i === N_FILAS - 1 ? FILA_CORTA : FILA_LARGA;

			for (let j = 0; j < longitudFila; j++) {
				const status = panel[i][j].texto === " " ? " space" : " not-yet";
				cards.push(<Card key={j} letra={panel[i][j].texto} estado={status} mostrarLetra={false} />);
			}

			filas.push(
				<div className="fila" key={i}>
					{cards}
				</div>
			);
		}

		this.setState({ filas });
	};

	render() {
		const { inputValue1, inputValue2, inputValue3, inputValue4, inputLetter, filas } = this.state;

		return (
			<>
				<div className="columnas">
					<div className="left">
						<input type="text" value={inputValue1} onChange={this.handleChange1} maxLength={12} />
						<br />
						<input type="text" value={inputValue2} onChange={this.handleChange2} maxLength={14} />
						<br />
						<input type="text" value={inputValue3} onChange={this.handleChange3} maxLength={14} />
						<br />
						<input type="text" value={inputValue4} onChange={this.handleChange4} maxLength={12} />
						<br />
						<button className="cargar-panel" onClick={this.handleSave}>
							Cargar Panel
						</button>
					</div>
					<div className="right">
						<input type="text" value={inputLetter} onChange={this.handleChangeLetter} maxLength={1} patter />
						<br />
						<button className="cargar-panel" onClick={this.handleSaveLetter}>
							Letra
						</button>
					</div>
					<div className="panel-buttons">
						<button className="resolver-panel" onClick={this.handleSave}>
							Resolver
						</button>
					</div>
					<div className="contrareloj">
						<button className="resolver-panel" onClick={this.handleSave}>
							Contra Reloj
						</button>
					</div>
				</div>
				<div className="greenScreen">{this.state.filas}</div>
			</>
		);
	}
}

export default Panel;
