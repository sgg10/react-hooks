import { useState } from "react";
import Header from "./components/Header";
import Characters from "./components/Characters";
import styles from "./App.module.scss";

function App() {
	const [darkMode, setDarkMode] = useState(true);

	return (
		<div className={`${styles["App"]} ${darkMode ? styles["dark"] : styles["ligth"]}`}>
			<Header darkMode={darkMode} setDarkMode={setDarkMode} />
			<Characters />
		</div>
	);
}

export default App;
