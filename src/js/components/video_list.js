import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import VideoListItem from './video_list_item';

// es6 syntax: fat arrows
const VideoList = (props) => {
	if (props.videos.length === 0) {
		return null;
	}

	const videoItems = props.videos[0].map((video) => {
		return <VideoListItem key={ video.etag } video={ video } />
	});

	return (
		<ul className="col-md-4 list-group">
		{ videoItems }
		</ul>
	);

};

function mapStateToProps(state, ownProps) {
	return {
		videos: state.videos
	}
}

export default connect(mapStateToProps)(VideoList);