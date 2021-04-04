import { useState, useEffect } from "react";

const useCharacters = (url: string) => {
	const [characters, setCharacters] = useState([]);

	const getCharacters = async () => {
		const response = await fetch(url);
		const data = await response.json();
		setCharacters(data.results);
	};

	useEffect(() => {
		getCharacters();
	}, [url]);

	return characters;
};

export default useCharacters;
