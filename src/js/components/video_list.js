import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const VideoList = (props) => {
	if (props.videos.length === 0) {
		return;
	}
	const videoItems = props.videos[0].map((video) => {
		return	<li key={ video.id.videoId } className="list-group-item">
				<div className="video-list media">
					<div className="media-left">
						<img className="media-object" src={ video.snippet.thumbnails.default.url } />
					</div>
				</div>
				<div className="media-body">
					<div className="media-heading">
					{ video.snippet.title }
					</div>
				</div>
			</li>
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