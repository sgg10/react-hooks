import { useState, useReducer, useMemo, useRef, useCallback } from "react";
import Skeleton from "react-loading-skeleton";
import { Mood, MoodBad, HelpOutline } from "@material-ui/icons/";
import { Grid } from "@material-ui/core";
import Search from "../Search";
import Card from "../Common/Card";
import useCharacters from "../../hooks/useCharacters";

const initialState = {
	favorites: [],
};

const API = "https://rickandmortyapi.com/api/character/";

const favoriteReducer = (state: any, action: any) => {
	switch (action.type) {
		case "ADD_TO_FAVORITE":
			if (state["favorites"].includes(action.payload)) return { ...state };
			return { ...state, favorites: [...state.favorites, action.payload] };
		case "REMOVE_FROM_FAVORITE":
			return { ...state, favorites: state["favorites"].filter((favorite: any) => favorite !== action.payload) };
		default:
			return { ...state };
	}
};

const Characters = () => {
	const [{ favorites }, dispatch] = useReducer(favoriteReducer, initialState);
	const [search, setSeacrh] = useState("");
	const searchInput = useRef<HTMLInputElement | any>("");

	const characters = useCharacters(API);

	const handleClick = (favorite: any) => {
		if (favorites.includes(favorite)) dispatch({ type: "REMOVE_FROM_FAVORITE", payload: favorite });
		else dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
	};

	// const handleSearch = () => {
	// 	setSeacrh(searchInput.current.children[1].children[0].value);
	// };
	const HandleSearch = useCallback(() => {
		setSeacrh(searchInput.current.children[1].children[0].value);
	}, []);

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

	// const filteredCharacters = characters.filter((character: any) => character["name"].toLowerCase().includes(search.toLowerCase()));

	const filteredCharacters = useMemo(() => characters.filter((character: any) => character["name"].toLowerCase().includes(search.toLowerCase())), [
		characters,
		search,
	]);

	return (
		<>
			{favorites && (
				<Grid container direction='row' justify='center' alignItems='center' style={{ marginBottom: "10px" }}>
					{favorites.map((favorite: any) => (
						<Grid item key={favorite.id}>
							<img style={{ borderRadius: "100%", height: "100px", width: "100px", margin: "10px" }} src={favorite["image"]} alt='' />
						</Grid>
					))}
				</Grid>
			)}
			<Search search={search} searchInput={searchInput} handleSearch={HandleSearch} />
			<Grid container direction='row' justify='center' alignItems='center' className='Characters'>
				{characters.length ? (
					filteredCharacters.map((character) => (
						<Grid key={character["id"]} item xs={12} md={3} sm={8} lg={3}>
							<Card
								setFavorite={() => handleClick(character)}
								photo={character["image"]}
								title={character["name"]}
								description={renderStatus(character["status"])}
								inList={favorites.includes(character)}
							/>
						</Grid>
					))
				) : (
					<Skeleton width={250} height={250} count={10} />
				)}
			</Grid>
		</>
	);
};

export default Characters;
