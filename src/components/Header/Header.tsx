import { useContext } from "react";
import { Grid } from "@material-ui/core";
import { BrightnessHigh, Brightness2 } from "@material-ui/icons";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "../Common/Switch";
import ThemeContext from "../../context/ThemeContext";
import styles from "./Header.module.scss";

const Header = () => {
	const { theme, setTheme } = useContext(ThemeContext);
	const handleClick = () => {
		localStorage.setItem("theme", `${!theme}`);
		setTheme(!theme);
	};

	return (
		<Grid className={styles["Header"]} container direction='row' justify='space-between' alignItems='center'>
			<Grid item>
				<h2>React Hooks</h2>
			</Grid>
			<Grid item>
				<FormControlLabel
					value='start'
					control={<Switch checked={theme} onChange={handleClick} />}
					label={theme ? <BrightnessHigh style={{ color: "#EBB929" }} /> : <Brightness2 style={{ color: "#496573" }} />}
					labelPlacement='start'
				/>
			</Grid>
		</Grid>
	);
};

export default Header;
