import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import MatchRow from "./MatchRow";
import { fetchMatches } from "../store/allMatches";

export class AllMatches extends Component {
	constructor() {
		super();
    this.state = {
      listOfMatches: [],
    };
	}

  componentDidMount() {
    const userId = this.props.auth.id
    this.props.fetchMatches(userId).then(() => {
      this.setState({ ...this.state, listOfMatches: this.props.matches });
    });
  }

	render() {
    const matches = this.props.matches
    console.log("BRRRRRR", matches)

		return (
      <div>
        {matches.map((match) => (
            <MatchRow
              key={match.id}
              match={match}
            />
          ))}
      </div>
    )
	}
}

const mapState = state => {
	return {
		matches: state.matches,
		auth: state.auth
	};
};

const mapDispatch = dispatch => {
	return {
		fetchMatches: (userId) => dispatch(fetchMatches(userId))
	};
};

export default connect(mapState, mapDispatch)(AllMatches);
