import shrtCodeApi from '../apis/shrtCodeApi';


export const fetchLink = inputValue => async dispatch => {
	const response = await shrtCodeApi.get(`shorten?url=${inputValue}`);

	dispatch({ type: 'FETCH_LINK', payload: response.data.result.short_link2 });
};