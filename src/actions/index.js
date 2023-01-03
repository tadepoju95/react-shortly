import shrtCodeApi from '../apis/shrtCodeApi';


export const shortenLink = inputValue => async dispatch => {
	const response = await shrtCodeApi.get(`shorten?url=${inputValue}`);

	dispatch({ type: 'SHORTEN_LINK', payload: response.data });
};