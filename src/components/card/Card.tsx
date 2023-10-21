import React, { useState } from "react";
import "./Card.css";

function Card(props: { letra: string; estado: string; mostrarLetra: boolean }) {
	// const [mostrarLetra, setMostrarLetra] = useState(true);

	const handleClick = () => {
		// console.error("EVENT CLICK: ", event);
		// if (props.estado === " pending") {
		//	setMostrarLetra(!mostrarLetra);
		//}
	};

	const addedClasses = () => {
		if (props.estado) {
			return props.estado;
		} else {
			return props.mostrarLetra ? " correct" : " pending";
		}
	};

	return (
		<>
			<button className={"letter-card" + addedClasses()} onClick={handleClick}>
				{props.mostrarLetra ? props.letra : ""}
			</button>
		</>
	);
}

export default Card;
