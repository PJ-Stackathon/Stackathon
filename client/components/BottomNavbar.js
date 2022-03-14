import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export const BottomNavbar = () => {
	return (
		<div className="bottom-navbar">
			<ul className="desktop-list">
				<li>
					<div>
						DISCOVER
					</div>
				</li>
				<li>
					<div>
						LIKES YOU
					</div>
				</li>
				<Link to="/matches">
					<li>
						<div>
							MATCHES
						</div>
					</li>
				</Link>
				<li>
					<div>
						SETTINGS
					</div>
				</li>
			</ul>
            <ul className="mobile-list">
                <li><i className="ri-compass-discover-line"></i></li>
                <li><i className="ri-heart-line"></i></li>
                <li><i className="ri-chat-3-line"></i></li>
                <li><i className="ri-user-line"></i></li>
            </ul>
		</div>
	);
};

export default BottomNavbar;
