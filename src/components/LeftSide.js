import React from "react";
import { FaUsers, FaMale, FaFemale } from "react-icons/fa";
import Search from "./Search";

const LeftSide = ({ val, filterGender, searchVal, changeSearch }) => {
	return (
		<div className="col-lg-5 left-side mb-3">
			<div className="row justify-content-center">
				<div className="col-md-10">
					<h6>
						<span>Hello</span>, Emerald
					</h6>
					<p className="light-color small-lg">
						Welcome to your dashboard, kindly sort through the user
						base
					</p>
					<Search
						placeholder={"Find a user"}
						searchVal={searchVal}
						changeSearch={changeSearch}
					/>
					<div className="mt-5 buttons">
						<p>Show Users</p>
						<div className="buttons-div">
							<div className="ind">
								<button
									className="btns user-btn pink"
									onClick={() => filterGender("")}
								>
									<FaUsers size={25} />
								</button>
								<span
									onClick={() => filterGender("")}
									className={`${
										val === ""
											? "light-pink"
											: "light-color"
									} small-sm mt-2`}
								>
									All users
								</span>
							</div>
							<div className="ind">
								<button
									className="btns user-btn green"
									onClick={() => filterGender("male")}
								>
									<FaMale size={25} />
								</button>
								<span
									onClick={() => filterGender("male")}
									className={`${
										val === "male"
											? "light-green"
											: "light-color"
									} small-sm mt-2`}
								>
									Male users
								</span>
							</div>
							<div className="ind">
								<button
									className="btns user-btn purple"
									onClick={() => filterGender("female")}
								>
									<FaFemale size={25} />
								</button>
								<span
									onClick={() => filterGender("female")}
									className={`${
										val === "female"
											? "light-purple"
											: "light-color"
									} small-sm mt-2`}
								>
									Female users
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LeftSide;
