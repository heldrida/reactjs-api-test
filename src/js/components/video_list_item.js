import React from 'react';

// es6 syntax: pass video property that exists in props
const VideoListItem = ({ video, onVideoSelect }) => {
	return (
		<li className="list-group-item" onClick={ () => onVideoSelect(video) }>
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={ video.snippet.thumbnails.default.url } />
				</div>
			</div>
			<div className="media-body">
				<div className="media-heading">
					<h4>{ video.snippet.title }</h4>
					<p>{ video.snippet.description }</p>
				</div>
			</div>
		</li>
	);
}

export default VideoListItem;