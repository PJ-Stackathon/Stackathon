import React from "react";
import { Link } from "react-router-dom";

export default function MatchRow(props) {
	return (
		<div>
			<img src={"default-profile-pic.jpg"} />
			<p>{props.match.firstName}</p>
			<p>Say hello to your MBTI match!</p>
		</div>
	);
}


{/* <Link to={`/users/${props.user.id}/${chatId}`}></Link> */}
