import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const VideoDetail = ({ video }) => {

	if (!video) {
		return (
			<div>Loading... </div>
		);
	}

	const videoId = 'PTXrxW7-Ons';
	// es6 syntax: template literals
	const url = `https://www.youtube.com/embed/${videoId}`;
	const title = 'foo bar title';
	const description = 'foo bar description';

	return (
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={ url }></iframe>
			</div>
			<div className="details">
				<div>{ title }</div>
				<div>{ description }</div>
			</div>
		</div>
	);

}

function mapStateToProps(state, ownProps) {
	return {
		video: state.video
	}
}

export default connect(mapStateToProps)(VideoDetail);