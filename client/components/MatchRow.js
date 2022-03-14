import React from "react";
import { Link } from "react-router-dom";

export default function MatchRow(props) {
	return (
		<div>
			<img src="../public/default-profile-pic.jpg" />
			<p>{props.match.firstName}</p>
			<p>Invited you to start the chat.</p>
		</div>
	);
}


{/* <Link to={`/users/${props.user.id}/${chatId}`}></Link> */}
