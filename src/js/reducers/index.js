import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import youtubeReducer from './youtube_reducer';
import videoReducer from './video_reducer';

const rootReducer = combineReducers({
	videos: youtubeReducer,
	video: videoReducer,
	routing: routerReducer
});

export default rootReducer;