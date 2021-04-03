import { makeStyles } from "@material-ui/core/styles";
import { default as MaterialCard } from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
		margin: 10,
	},
	media: {
		height: "329px",
	},
});

interface CardProps {
	photo: string;
	title: string;
	description?: any;
}

export default function Card({ photo, title, description }: CardProps) {
	const classes = useStyles();

	return (
		<MaterialCard className={classes.root}>
			<CardActionArea>
				<CardMedia className={classes.media} image={photo} title={title} />
				<CardContent>
					<Typography gutterBottom variant='h5' component='h2'>
						{title}
					</Typography>
					{description}
				</CardContent>
			</CardActionArea>
		</MaterialCard>
	);
}
