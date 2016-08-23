import { SELECT_VIDEO } from '../actions/index';

const INITIAL_STATE = [];

// es6 syntax: default function parameters
export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case SELECT_VIDEO:
			return [action.payload, ...state];
		break;
		default:
			return state;
	}

};