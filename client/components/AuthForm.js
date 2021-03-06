// import React from "react";
// import { connect } from "react-redux";
// import { authenticate } from "../store";

// /**
//  * COMPONENT
//  */
// const AuthForm = props => {
// 	const { name, displayName, handleSubmit, error } = props;

// 	return (
// 		<div>
// 			<form onSubmit={handleSubmit} name={name}>
// 				<div>
// 					<label htmlFor="username">
// 						<small>Username</small>
// 					</label>
// 					<input name="username" type="text" />
// 				</div>
// 				<div>
// 					<label htmlFor="password">
// 						<small>Password</small>
// 					</label>
// 					<input name="password" type="password" />
// 				</div>
// 				<div>
// 					<button type="submit">{displayName}</button>
// 				</div>
// 				{error && error.response && <div> {error.response.data} </div>}
// 			</form>
// 		</div>
// 	);
// };

// /**
//  * CONTAINER
//  *   Note that we have two different sets of 'mapStateToProps' functions -
//  *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
//  *   function, and share the same Component. This is a good example of how we
//  *   can stay DRY with interfaces that are very similar to each other!
//  */
// const mapLogin = state => {
// 	return {
// 		name: "login",
// 		displayName: "Login",
// 		error: state.auth.error
// 	};
// };

// const mapSignup = state => {
// 	return {
// 		name: "signup",
// 		displayName: "Sign Up",
// 		error: state.auth.error
// 	};
// };

// const mapDispatch = dispatch => {
// 	return {
// 		handleSubmit(evt) {
// 			evt.preventDefault();
// 			const formName = evt.target.name;
// 			const username = evt.target.username.value;
// 			const password = evt.target.password.value;
// 			dispatch(authenticate(username, password, formName));
// 		}
// 	};
// };

// export const Login = connect(mapLogin, mapDispatch)(AuthForm);
// export const Signup = connect(mapSignup, mapDispatch)(AuthForm);

import React from "react";
import { connect } from "react-redux";
import { authenticateSignUp, authenticateLogin } from "../store";

/**
 * COMPONENT
 */
const AuthFormSignUp = props => {
	const { name, displayName, handleSubmit, error } = props;

	return (
		<div className="info-input">
			<form onSubmit={handleSubmit} name={name}>
				<div>
					<label htmlFor="username">
						<h4>Username:</h4>
					</label>
					<input name="username" type="text" />
				</div>
				<div>
					<label htmlFor="firstName">
						<h4>First Name:</h4>
					</label>
					<input name="firstName" type="text" />
				</div>
				<div>
					<label htmlFor="lastName">
						<h4>Last Name:</h4>
					</label>
					<input name="lastName" type="text" />
				</div>
				<div>
					<label htmlFor="password">
						<h4>Password:</h4>
					</label>
					<input name="password" type="password" />
				</div>
				<div>
					<label htmlFor="email">
						<h4>Email:</h4>
					</label>
					<input name="email" type="email" />
				</div>
				<div>
					<label htmlFor="mbti">
						<h4>MBTI:</h4>
					</label>
					<select name="mbti">
						<option value="INFP">INFP</option>
						<option value="ENFP">ENFP</option>
						<option value="INFJ">INFJ</option>
						<option value="ENFJ">ENFJ</option>
						<option value="INTJ">INTJ</option>
						<option value="ENTJ">ENTJ</option>
						<option value="INTP">INTP</option>
						<option value="ENTP">ENTP</option>
						<option value="ISFP">ISFP</option>
						<option value="ESFP">ESFP</option>
						<option value="ISTP">ISTP</option>
						<option value="ESTP">ESTP</option>
						<option value="ISFJ">ISFJ</option>
						<option value="ESFJ">ESFJ</option>
						<option value="ISTJ">ISTJ</option>
						<option value="ESTJ">ESTJ</option>
					</select>
				</div>
				<div>
					<label htmlFor="loveLanguage">
						<h4>Love Language:</h4>
					</label>
					<select name="loveLanguage">
						<option value="words-of-affirmation">Words of Affirmation</option>
						<option value="quality-time">Quality Time</option>
						<option value="receiving-gifts">Receiving Gifts</option>
						<option value="acts-of-service">Acts of Serice</option>
						<option value="physical-touch">Physical Touch</option>
					</select>
				</div>
				{/* <div>
					<label htmlFor="interestedIn">
						<h4>Interested In:</h4>
					</label>
					<select name="interestedIn">
						<option value="everyone">Everyone</option>
						<option value="male">Men</option>
						<option value="female">Women</option>
					</select>
				</div> */}
				<hr />
				<div>
					<button type="submit">{displayName}</button>
				</div>
				{error && error.response && <div> {error.response.data} </div>}
			</form>
		</div>
	);
};

const AuthFormLogin = props => {
	const { name, displayName, handleSubmit, error } = props;

	return (
		<div>
			<form onSubmit={handleSubmit} name={name}>
				<div>
					<label htmlFor="username">
						<h4>Username:</h4>
					</label>
					<input name="username" type="text" />
				</div>
				<div>
					<label htmlFor="password">
						<h4>Password:</h4>
					</label>
					<input name="password" type="password" />
				</div>
				<hr />
				<div>
					<button type="submit">{displayName}</button>
				</div>
				{error && error.response && <div> {error.response.data} </div>}
			</form>
		</div>
	);
};

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
	return {
		name: "login",
		displayName: "Login",
		error: state.auth.error
	};
};

const mapSignup = state => {
	return {
		name: "signup",
		displayName: "Sign Up",
		error: state.auth.error
	};
};

const mapDispatchSignUp = dispatch => {
	return {
		handleSubmit(evt) {
			evt.preventDefault();
			const formName = evt.target.name;
			const username = evt.target.username.value;
			const firstName = evt.target.firstName.value;
			const lastName = evt.target.lastName.value;
			const password = evt.target.password.value;
			const email = evt.target.email.value;
			const mbti = evt.target.mbti.value;
			const loveLanguage = evt.target.loveLanguage.value;
			// const interestedIn = evt.target.interestedIn.value;
			dispatch(
				authenticateSignUp(
					username,
					firstName,
					lastName,
					password,
					email,
					mbti,
					loveLanguage,
					// interestedIn,
					formName,
				)
			);
		}
	};
};

const mapDispatchLogin = dispatch => {
	return {
		handleSubmit(evt) {
			evt.preventDefault();
			const formName = evt.target.name;
			const username = evt.target.username.value;
			const password = evt.target.password.value;
			dispatch(authenticateLogin(username, password, formName));
		}
	};
};

export const Login = connect(mapLogin, mapDispatchLogin)(AuthFormLogin);
export const Signup = connect(mapSignup, mapDispatchSignUp)(AuthFormSignUp);
