import apiKeys from '../../../api_keys';
import YTSearch from 'youtube-api-search';

// es6 syntax: Const declaration
const API_KEY = apiKeys.youtube_api;

export const SEARCH_VIDEOS = 'SEARCH_VIDEOS';
export const SELECT_VIDEO = 'SELECT_VIDEO';

export function searchVideos(term) {

	// es6 syntax: Promises implementation
	// es6 syntax: `let` is a var scoped into the block (curly braces)
	let promise = new Promise((resolve, reject) => {
		
		// todo: handle exceptions
		YTSearch({ key: API_KEY, term: term }, (videos) => {
			resolve({ videos });
		});

	});

	return {
		type: SEARCH_VIDEOS,
		payload: promise
	}
}

export function selectVideo(video) {
	return {
		type: SELECT_VIDEO,
		payload: video
	}

}