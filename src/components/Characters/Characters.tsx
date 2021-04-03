import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Mood, MoodBad, HelpOutline } from "@material-ui/icons/";
import { Grid } from "@material-ui/core";
import Card from "../Common/Card";

const Characters = () => {
	const [characters, setCharacters] = useState([]);

	const getCharacters = async () => {
		const response = await fetch("https://rickandmortyapi.com/api/character");
		const data = await response.json();
		setCharacters(data.results);
	};

	const renderStatus = (status: string) => {
		switch (status) {
			case "Alive":
				return (
					<Grid container direction='row' justify='center' alignItems='center'>
						<Grid item>
							<Mood style={{ color: "green" }} />
						</Grid>
						<Grid item>
							<p>Alive</p>
						</Grid>
					</Grid>
				);
			case "Dead":
				return (
					<Grid container direction='row' justify='center' alignItems='center'>
						<Grid item>
							<MoodBad style={{ color: "red" }} />
						</Grid>
						<Grid item>
							<p>Dead</p>
						</Grid>
					</Grid>
				);
			case "unknown":
				return (
					<Grid container direction='row' justify='center' alignItems='center'>
						<Grid item>
							<HelpOutline style={{ color: "blue" }} />
						</Grid>
						<Grid item>
							<p>Unknown</p>
						</Grid>
					</Grid>
				);
			default:
				break;
		}
	};

	useEffect(() => {
		getCharacters();
	}, []);

	return (
		<Grid container direction='row' justify='center' alignItems='center' className='Characters'>
			{characters.length ? (
				characters.map((character) => (
					<Grid key={character["id"]} item xs={12} md={3} sm={8} lg={3}>
						<Card photo={character["image"]} title={character["name"]} description={renderStatus(character["status"])} />
					</Grid>
				))
			) : (
				<Skeleton width={250} height={250} count={10} />
			)}
		</Grid>
	);
};

export default Characters;
