import React from "react";
import { Grid, TextField } from "@material-ui/core";

const Search = ({ search, searchInput, handleSearch }: any) => {
	return (
		<Grid container direction='row' justify='center' alignItems='center'>
			<TextField label='Search' ref={searchInput} variant='outlined' style={{ width: "90%" }} value={search} onChange={handleSearch} />
			{/* <input placeholder='Search' ref={searchInput} style={{ width: "90%" }} value={search} onChange={handleSearch} /> */}
		</Grid>
	);
};

export default Search;
