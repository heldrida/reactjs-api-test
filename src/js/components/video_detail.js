import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Video from './video';

const VideoDetail = ({ video }) => {

	if (!video[0]) {
		return null;
	}

	const videoId = video[0].id.videoId;
	// es6 syntax: template literals
	const url = `https://www.youtube.com/embed/${videoId}`;
	const title = video[0].snippet.title;
	const description = video[0].snippet.description;

	return (
		<Video url={ url } title={ title } description={ description } /> 
	);

}

function mapStateToProps(state, ownProps) {
	return {
		video: state.video
	}
}

export default connect(mapStateToProps)(VideoDetail);