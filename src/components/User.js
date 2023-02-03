import React from "react";
import { FaArrowRight, FaRegEnvelope } from "react-icons/fa";
import { BsTelephoneInbound } from "react-icons/bs";

const User = ({ user, showCountry, navigate }) => {
	return (
		<div className="shadow user-box">
			<div className="row">
				<div className="col-md-2 mb-3">
					<img src={user.picture.large} alt={"User"} />
				</div>
				<div className="col-md-10 mb-3">
					<h6>
						{user.name.first} {user.name.last}
					</h6>
					<p>
						{user.location.street.number},{" "}
						{user.location.street.name}, {user.location.state},{" "}
						{showCountry && <span>{user.location.country}</span>}
					</p>
					<div className="row align-items-center">
						<div className="col-lg-6 mb-3">
							<a href={`mailto:${user.email}`}>
								<FaRegEnvelope />
								<span>{user.email}</span>
							</a>
						</div>
						<div className="col-lg-4 mb-3">
							<a href="#">
								<BsTelephoneInbound />
								<span>{user.phone}</span>
							</a>
						</div>
						<div className="col-lg-2 mb-3">
							<button
								className="btns btn-nav"
								onClick={() => navigate(user)}
							>
								<FaArrowRight />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default User;
