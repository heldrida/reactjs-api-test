import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import VideoListItem from './video_list_item';
import { selectVideo } from '../actions/index';

// es6 syntax: fat arrows
const VideoList = (props) => {
	if (props.videos.length === 0) {
		return null;
	}

	const onVideoSelect = (video) => {
		props.selectVideo(video);
	};

	const videoItems = props.videos[0].map((video) => {
		return <VideoListItem key={ video.etag } video={ video } onVideoSelect={ onVideoSelect } />
	});

	return (
		<div className={'video-list'}>
			<ul>
			{ videoItems }
			</ul>
		</div>
	);

};

function mapStateToProps(state, ownProps) {
	return {
		videos: state.videos
	}
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		selectVideo: selectVideo
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(VideoList);