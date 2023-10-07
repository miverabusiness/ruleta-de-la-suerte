import React, { useState } from "react";
import "./Panel.css";
import Card from "../card/Card";

const N_FILAS = 4;
const FILA_CORTA = 12;
const FILA_LARGA = 14;

let panel = [];

for (let i = 0; i < N_FILAS; i++) {
	if (i === 0 || i === N_FILAS - 1) {
		panel.push(Array(FILA_CORTA).fill("!"));
	} else {
		panel.push(Array(FILA_LARGA).fill("?"));
	}
}

panel = [
	[" ", "A", "L", "A", "I", "N", "B", "O", "S", "S", " ", " "], //12
	["P", "E", "D", "A", "Z", "O", " ", "D", "E", " ", "R", "A", "T", "A"], //14
	["M", "A", "R", "I", "C", "O", "N", " ", "T", "E", " ", "V", "O", "Y"], //14
	["A", " ", "F", "O", "I", "A", "R", " ", "R", "I", "C", "O"], //12
];

function Panel() {
	const [inputValue, setInputValue] = useState("");
	const [savedValue, setSavedValue] = useState(null);

	const handleChange = (event) => {
		setInputValue(event.target.value);
	};

	const handleSave = () => {
		const arrayLetras = ["", "", "", "", "", "", "", "", "", "", "", "", "", ""];
		const texto = inputValue.toUpperCase();
		for (let i = 0; i < arrayLetras.length; i++) {
			arrayLetras[i] = texto[i] ? texto[i] : " ";
		}
		setSavedValue(arrayLetras);
		panel[1] = arrayLetras;
	};

	console.error("EPA", savedValue);

	const filas = [];
	for (let i = 0; i < N_FILAS; i++) {
		const cards = [];
		const longitudFila = i === 0 || i === N_FILAS - 1 ? FILA_CORTA : FILA_LARGA;

		for (let j = 0; j < longitudFila; j++) {
			cards.push(<Card key={j} letra={panel[i][j]} />);
		}

		filas.push(
			<div className="fila" key={i}>
				{cards}
			</div>
		);
	}

	return (
		<>
			<input type="text" value={inputValue} onChange={handleChange} />
			<button onClick={handleSave}>OK!</button>
			{console.error("inputs", savedValue)}
			{filas}
		</>
	);
}

export default Panel;
