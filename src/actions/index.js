import shrtCodeApi from '../apis/shrtCodeApi';
import links from '../apis/links';


export const fetchLink = inputValue => async dispatch => {
	const response = await shrtCodeApi.get(`shorten?url=${inputValue}`);

	dispatch({ type: 'FETCH_LINK', payload: response.data.result });
};

export const fetchAllLinks = () => async dispatch => {
	const response = await links.get('/urlLinks');

	dispatch({ type: 'FETCH_ALL_LINKS', payload: response.data });
}

export const createLinks = (link1, link2) => async (dispatch) => {
  const response = await links.post('/urlLinks', { link1, link2});
  console.log(response.data);
  dispatch({ type: 'CREATE_LINKS', payload: response.data });
};

