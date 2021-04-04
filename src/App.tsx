import { useContext } from "react";
import Header from "./components/Header";
import Characters from "./components/Characters";
import styles from "./App.module.scss";
import ThemeContext from "./context/ThemeContext";

function App() {
	const { theme } = useContext(ThemeContext);

	return (
		<div className={`${styles["App"]} ${theme ? styles["dark"] : styles["ligth"]}`}>
			<Header />
			<Characters />
		</div>
	);
}

export default App;
