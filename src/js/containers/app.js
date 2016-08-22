import React, { Component } from 'react';
import VideoList from '../components/video_list';

class App extends Component {
	render() {
		return (
			<div className="app">
				<VideoList videos={ [1, 2, 3] } />
			</div>
		);
	}
}

export default App;