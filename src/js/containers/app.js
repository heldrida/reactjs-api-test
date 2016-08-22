import React, { Component } from 'react';
import VideoList from '../components/video_list';
import SearchBar from '../components/search_bar';

class App extends Component {
	render() {
		return (
			<div className="app">
				<SearchBar />
				<VideoList />
			</div>
		);
	}
}

export default App;