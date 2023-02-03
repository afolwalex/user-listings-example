import React, { useState } from "react";
import { CSVLink, CSVDownload } from "react-csv";
import Switch from "react-switch";
import { BiCloudUpload } from "react-icons/bi";
import Search from "./Search";
import User from "./User";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import UserDetails from "./UserDetails";

const UserComponent = ({
	users,
	showCountry,
	countryHandler,
	currentPage,
	changePage,
	searchVal,
	changeSearch,
}) => {
	const headers = [
		{ label: "First Name", key: "name.first" },
		{ label: "Last Name", key: `name.last` },
		{ label: "Age", key: `dob.age` },
		{ label: "Email", key: "email" },
		{ label: "Phone", key: `phone` },
		{ label: "Country", key: "location.country" },
	];

	const [details, setDetails] = useState({});

	const goTo = (val) => {
		setDetails(val);
	};

	const goNext = () => {
		changePage(currentPage + 1);
	};

	const goPrev = () => {
		if (currentPage > 1) {
			changePage(currentPage - 1);
		}
	};

	return (
		<div className="col-lg-7 user-comp">
			<div className="box">
				<h6>All Users</h6>
				<p className="small-lg">Filter by:</p>
				<div className="row">
					<div className="col-lg-4 mb-3">
						<Search
							placeholder={"Find in list"}
							searchVal={searchVal}
							changeSearch={changeSearch}
						/>
					</div>
					<div className="col-lg-4 mb-3">
						<select>
							<option value={""}>Country</option>
						</select>
					</div>
					<div className="col-lg-4 mb-3">
						<div className="switch">
							<Switch
								onChange={(checked) => countryHandler(checked)}
								checked={showCountry}
								checkedIcon={false}
								uncheckedIcon={false}
								offColor="#ececf3"
								onColor="#BFE5E6"
								onHandleColor="#2FBAB5"
								height={28}
								width={56}
							/>
							<span>Show Country</span>
						</div>
					</div>
				</div>
				{details.id ? (
					<div className="preview">
						<UserDetails
							details={details}
							navigate={() => setDetails({})}
						/>
					</div>
				) : (
					<div className="users">
						{users.map((u) => (
							<User
								user={u}
								key={u.id.value}
								showCountry={showCountry}
								navigate={goTo}
							/>
						))}
					</div>
				)}

				<div className="paginate">
					<CSVLink
						data={users}
						headers={headers}
						className="btns btn-paginate purple shadow-sm"
						filename="Users"
					>
						<BiCloudUpload />
						<span>Download Results</span>
					</CSVLink>

					<div>
						<button
							className="btns btn-paginate ash shadow-sm"
							onClick={goPrev}
						>
							<FaAngleLeft />
						</button>
						<button
							className="btns btn-paginate dark shadow-sm"
							onClick={goNext}
						>
							<FaAngleRight />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserComponent;
