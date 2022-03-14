import React from "react";
import { Link } from "react-router-dom";

export default function MatchRow(props) {
	return (
		<div className="match-row">
			<ul>
				<li>
					<img src={"default-profile-pic.jpg" } className="match-row-img"/>
					<p>{props.match.firstName}</p>
					<p>Say hello to your MBTI match!</p>
				</li>
			</ul>
		</div>
	);
}

{
	/* <Link to={`/users/${props.user.id}/${chatId}`}></Link> */
}
