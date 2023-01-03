export default (state = [], action) => {
	switch (action.type) {
		case 'SHORTEN_LINK': 
			return action.payload;
		default: 
			return state;
	}
};