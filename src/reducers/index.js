import { combineReducers } from 'redux';
import shortenLinkReducer from './shortenLinkReducer';

export default combineReducers({
	shortenLink: shortenLinkReducer
});