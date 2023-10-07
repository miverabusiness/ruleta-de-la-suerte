import React, { useState } from "react";
import "./Card.css";

function Card(props: { letra: string }) {
	const [mostrarLetra, setMostrarLetra] = useState(false);

	const handleClick = () => {
		setMostrarLetra(!mostrarLetra);
	};

	const isLetter = () => {
		return props.letra === " " || props.letra === "" ? " space" : mostrarLetra ? " correct" : " not-yet";
	};

	return (
		<>
			<button className={"letter-card" + isLetter()} onClick={handleClick}>
				{mostrarLetra ? props.letra : ""}
			</button>
		</>
	);
}

export default Card;
