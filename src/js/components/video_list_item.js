import React from 'react';

// es6 syntax sugar, pass video property that exists in props
const VideoListItem = ({ video }) => {
	return (
		<li className="list-group-item">
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
	);
}

export default VideoListItem;