import React, { Component } from 'React';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchVideos } from '../actions/index';

class SearchBar extends Component {

	constructor(props) {
		super(props);
		// todo: probably a default term is not required, have a message instead maybe
		this.state = {
			term: 'skateboarding'
		}
	}

	componentWillMount() {
		this.props.searchVideos(this.state.term);
	}

	onInputChange(term) {
		this.setState({ term });
		this.props.searchVideos(this.state.term);
	}

	render() {

		// todo: debounce the callback (split the state and call for the action)

		return (
			<div className="search-bar">
				<label>
					Search:
				</label>
				<input
					value={ this.state.term } 
					onChange={ event => this.onInputChange(event.target.value) } />
			</div>
		);

	}

};

function mapStateToProps(state, ownProps) {
	return {
		videos: state.videos
	}
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		searchVideos: searchVideos
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SearchBar);