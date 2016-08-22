import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import youtubeReducer from './youtube_reducer';


const rootReducer = combineReducers({
	videos: youtubeReducer
});

export default rootReducer;