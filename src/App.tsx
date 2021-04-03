import { useState } from "react";
import Header from "./components/Header";
import styles from "./App.module.scss";

function App() {
	const [darkMode, setDarkMode] = useState(false);

	return (
		<div className={`${styles["App"]} ${darkMode ? styles["dark"] : styles["ligth"]}`}>
			<Header darkMode={darkMode} setDarkMode={setDarkMode} />
		</div>
	);
}

export default App;
