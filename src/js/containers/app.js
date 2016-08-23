// es6 syntax: destructuring assignments
// es6 syntax: import module
import React, { Component } from 'react';
import VideoList from '../components/video_list';
import SearchBar from '../components/search_bar';

// es6 syntax: the use of Class inheritance 
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

// es6 syntax: export module
export default App;