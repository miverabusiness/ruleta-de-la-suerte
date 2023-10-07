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
	["", "", "", "", "", "", "", "", "", "", "", "", "", ""], //12
	["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], //14
	["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], //14
	["", "", "", "", "", "", "", "", "", "", "", "", "", ""], //12
];

function Panel() {
	const [inputValue1, setInputValue1] = useState("");
	const [inputValue2, setInputValue2] = useState("");
	const [inputValue3, setInputValue3] = useState("");
	const [inputValue4, setInputValue4] = useState("");
	const [savedValue1, setSavedValue1] = useState(null);
	const [savedValue2, setSavedValue2] = useState(null);
	const [savedValue3, setSavedValue3] = useState(null);
	const [savedValue4, setSavedValue4] = useState(null);

	const handleChange1 = (event) => {
		setInputValue1(event.target.value);
	};

	const handleChange2 = (event) => {
		setInputValue2(event.target.value);
	};

	const handleChange3 = (event) => {
		setInputValue3(event.target.value);
	};

	const handleChange4 = (event) => {
		setInputValue4(event.target.value);
	};

	const handleSave = () => {
		let arrayLetras1 = ["", "", "", "", "", "", "", "", "", "", "", "", "", ""];
		let arrayLetras2 = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
		let arrayLetras3 = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
		let arrayLetras4 = ["", "", "", "", "", "", "", "", "", "", "", "", "", ""];
		const texto1 = inputValue1.toUpperCase();
		const texto2 = inputValue2.toUpperCase();
		const texto3 = inputValue3.toUpperCase();
		const texto4 = inputValue4.toUpperCase();

		for (let i = 0; i < arrayLetras1.length; i++) {
			arrayLetras1[i] = texto1[i] ? texto1[i] : " ";
		}

		for (let i = 0; i < arrayLetras2.length; i++) {
			arrayLetras2[i] = texto2[i] ? texto2[i] : " ";
		}

		for (let i = 0; i < arrayLetras3.length; i++) {
			arrayLetras3[i] = texto3[i] ? texto3[i] : " ";
		}

		for (let i = 0; i < arrayLetras4.length; i++) {
			arrayLetras4[i] = texto4[i] ? texto4[i] : " ";
		}

		setSavedValue1(arrayLetras1);
		setSavedValue2(arrayLetras2);
		setSavedValue3(arrayLetras3);
		setSavedValue4(arrayLetras4);

		panel[0] = arrayLetras1;
		panel[1] = arrayLetras2;
		panel[2] = arrayLetras3;
		panel[3] = arrayLetras4;
	};

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
			<input type="text" value={inputValue1} onChange={handleChange1} />
			<br />
			<input type="text" value={inputValue2} onChange={handleChange2} />
			<br />
			<input type="text" value={inputValue3} onChange={handleChange3} />
			<br />
			<input type="text" value={inputValue4} onChange={handleChange4} />
			<br />
			<button onClick={handleSave}>OK!</button>
			{filas}
		</>
	);
}

export default Panel;
