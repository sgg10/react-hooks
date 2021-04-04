import { withStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import { default as MaterialSwitch } from "@material-ui/core/Switch";

const Switch = withStyles({
	switchBase: {
		color: purple[300],
		"&$checked": {
			color: purple[500],
		},
		"&$checked + $track": {
			backgroundColor: purple[500],
		},
	},
	checked: {},
	track: {},
})(MaterialSwitch);

export default Switch;
