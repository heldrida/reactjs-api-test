import React from 'react';

const Video = ({ url, title, description }) => {

	return (
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={ url }></iframe>
			</div>
			<div className="details">
				<h4>{ title }</h4>
				<p>{ description }</p>
			</div>
		</div>
	);

}

export default Video;