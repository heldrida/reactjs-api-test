import { SEARCH_VIDEOS } from '../actions/index';

const INITIAL_STATE = [];

// es6 syntax: default function parameters
export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case SEARCH_VIDEOS:
			return [action.payload.videos, ...state];
		break;
		default:
			return state;
	}

};