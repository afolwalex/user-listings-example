import React from "react";
import { BsTelephoneInbound } from "react-icons/bs";
import { FaArrowLeft, FaRegEnvelope } from "react-icons/fa";

const UserDetails = ({ details, navigate }) => {
	return (
		<div className="user-details">
			<p className="back" onClick={navigate}>
				<FaArrowLeft />
				<span>RESULTS</span>
			</p>
			<div className="body row mt-4">
				<div className="col-md-3">
					<img src={details.picture.large} alt={"User"} />
				</div>
				<div className="col-md-9">
					<div className="bold">
						<b>
							{details.name.title} {details.name.first}{" "}
							{details.name.last}
						</b>
						<span>{details.dob.age}</span>
					</div>
					<p>
						{details.location.street.number},{" "}
						{details.location.street.name}, {details.location.state}
						, {details.location.country}
					</p>
					<p>
						<a href="#" className="ash">
							<FaRegEnvelope />
							<span>{details.email}</span>
						</a>
					</p>
					<p>
						<span className="pink">
							JOINED: {details.registered.date}
						</span>
					</p>
					<p className="shift">
						<a href={`tel:${details.phone}`}>
							<BsTelephoneInbound />
							<span>{details.phone}</span>
						</a>
					</p>
					<p className="shift">
						<a href="#">
							<span>{details.cell}</span>
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default UserDetails;
