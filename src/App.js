import React, { useEffect, useState } from "react";
import axios from "axios";
import LeftSide from "./components/LeftSide";
import UserComponent from "./components/UserComponent";

const App = () => {
	const [pageNumber, setPageNumber] = useState(1);
	const [showCountry, setShowCountry] = useState(true);
	const [users, setUsers] = useState([]);
	const [gender, setGender] = useState("");
	const [search, setSearch] = useState("");

	useEffect(() => {
		fetchUsers();
	}, [pageNumber, gender, search]);

	const fetchUsers = async () => {
		if (search) {
			searchUsers();
		} else {
			let url = `https://randomuser.me/api/?gender=${gender}&results=3&page=${pageNumber}`;
			let url2 = `https://randomuser.me/api/?page=${pageNumber}&results=3&seed=abc`;
			try {
				const { data } = await axios.get(gender ? url : url2);

				setUsers(data.results);
			} catch (err) {
				console.log(err);
			}
		}
	};

	const searchUsers = () => {
		if (search.length > 1 && users.length > 0) {
			let arr = users.filter(
				(n) =>
					n.name.first.toLowerCase().indexOf(search.toLowerCase()) !==
					-1
			);
			setUsers(arr);
		}
	};

	return (
		<div className="container main">
			<div className="row">
				<LeftSide
					val={gender}
					filterGender={(val) => setGender(val)}
					searchVal={search}
					changeSearch={(val) => setSearch(val)}
				/>
				<UserComponent
					users={users}
					showCountry={showCountry}
					countryHandler={(val) => setShowCountry(val)}
					currentPage={pageNumber}
					changePage={(val) => setPageNumber(val)}
					searchVal={search}
					changeSearch={(val) => setSearch(val)}
				/>
			</div>
		</div>
	);
};

export default App;
