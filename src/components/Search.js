import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ placeholder, searchVal, changeSearch }) => {
	const changeHandler = (e) => {
		changeSearch(e.target.value);
	};

	return (
		<div className="search-input">
			<input
				type={"text"}
				placeholder={placeholder}
				value={searchVal}
				onChange={changeHandler}
			/>
			<FaSearch size={20} />
		</div>
	);
};

export default Search;
