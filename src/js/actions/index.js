export const SEARCH_VIDEOS = 'SEARCH_VIDEOS';

export function searchVideos(term) {

	// Fake the http get request
	let promise = new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve(['VIDEO1', 'VIDEO2', 'VIDEO3']);
		}, 1200);
	});

	return {
		type: SEARCH_VIDEOS,
		payload: promise
	}
}