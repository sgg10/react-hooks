import { makeStyles } from "@material-ui/core/styles";
import { default as MaterialCard } from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { FavoriteBorderOutlined, FavoriteOutlined } from "@material-ui/icons";

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
	setFavorite?: any;
	inList?: boolean;
}

export default function Card({ photo, title, description, setFavorite, inList }: CardProps) {
	const classes = useStyles();

	return (
		<MaterialCard className={classes.root}>
			<CardMedia className={classes.media} image={photo} title={title} />
			<CardContent>
				<Typography gutterBottom variant='h5' component='h2'>
					{title}
				</Typography>
				<div>{description}</div>
				<div onClick={setFavorite}>
					{inList ? (
						<FavoriteOutlined style={{ color: "red", cursor: "pointer" }} />
					) : (
						<FavoriteBorderOutlined style={{ color: "red", cursor: "pointer" }} />
					)}
				</div>
			</CardContent>
		</MaterialCard>
	);
}
