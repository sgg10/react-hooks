import { Grid } from "@material-ui/core";
import { BrightnessHigh, Brightness2 } from "@material-ui/icons";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "../Common/Switch";
import styles from "./Header.module.scss";

interface HeaderProps {
	darkMode: boolean;
	setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ darkMode, setDarkMode }: HeaderProps) => {
	const handleClick = () => setDarkMode(!darkMode);

	return (
		<Grid className={styles["Header"]} container direction='row' justify='space-between' alignItems='center'>
			<Grid item>
				<h2>React Hooks</h2>
			</Grid>
			<Grid item>
				<FormControlLabel
					value='start'
					control={<Switch checked={darkMode} onChange={handleClick} />}
					label={darkMode ? <BrightnessHigh style={{ color: "#EBB929" }} /> : <Brightness2 style={{ color: "#496573" }} />}
					labelPlacement='start'
				/>
			</Grid>
		</Grid>
	);
};

export default Header;
