import { useState } from "react";
import "./App.css";
import Panel from "./components/panel/Panel";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1>La Ruleta De La Suerte</h1>
			<Panel />
			<p className="info-text">
				©{" "}
				<a href="https://www.twitch.tv/TheAlainboss" target="_blank">
					Alainboss
				</a>{" "}
				- <i>All rights reserved</i>
			</p>
		</>
	);
}

export default App;
