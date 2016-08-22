import apiKeys from '../../../api_keys';
import YTSearch from 'youtube-api-search';

const API_KEY = apiKeys.youtube_api;

export const SEARCH_VIDEOS = 'SEARCH_VIDEOS';

export function searchVideos(term) {

	console.log('searchVideos action call with term: ', term);

	let promise = new Promise(function (resolve, reject) {
		
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