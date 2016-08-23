// es6 syntax: destructuring assignments
// es6 syntax: import module
import React, { Component } from 'react';
import VideoList from '../components/video_list';
import SearchBar from '../components/search_bar';
import VideoDetail from '../components/video_detail';

require('../../sass/app.scss');

// es6 syntax: the use of Class inheritance 
class App extends Component {
	render() {
		return (
			<div className="app">
				<div className={ 'title-container' }>
					<h1>ReactJS + Redux + Youtube API</h1>
				</div>
				<SearchBar />
				<VideoDetail />
				<VideoList />
			</div>
		);
	}
}

// es6 syntax: export module
export default App;