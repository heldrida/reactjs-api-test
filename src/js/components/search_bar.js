import React, { Component } from 'React';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchVideos } from '../actions/index';

class SearchBar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			term: 'skateboarding'
		}
	}

	componentWillMount() {
		this.props.searchVideos(this.state.term);
	}

	render() {

		console.log(this.props.videos);

		return (
			<div className="search-bar">
				<input
					value={ this.state.term } 
					onChange={ event => this.onInputChange(event.target.value) } />
			</div>
		);

	}

	onInputChange(term) {
		this.setState({ term });
		this.props.searchVideos(this.state.term);
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