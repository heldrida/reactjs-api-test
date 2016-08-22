import React from 'react';

const VideoList = (props) => {
	const videoItems = props.videos.map((video, k) => {
		return	<li key={ k } className="list-group-item">
				<div className="video-list media">
					<div className="media-left">
						<img className="media-object" src={ '//loremflickr.com/500/500' } />
					</div>
				</div>
				<div className="media-body">
					<div className="media-heading">
					title goes here
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

export default VideoList;