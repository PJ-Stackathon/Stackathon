import React from "react";
import { connect } from "react-redux";

/**
 * COMPONENT
 */
export const Home = props => {
	const { username } = props;

	return (
		<div>
			<div className="settings">
				<h3 className="title">Settings</h3>
				<img src={"default-profile-pic.jpg"} className="profile-pic" />
			</div>

			<div className="settings-features">
				<ul>
					<li>
						<div>Preferences</div>
					</li>
					<li>
						<div>Account</div>
					</li>
					<li>
						<div>Learn about your MBTI</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

/**
 * CONTAINER
 */
const mapState = state => {
	return {
		username: state.auth.username
	};
};

export default connect(mapState)(Home);
