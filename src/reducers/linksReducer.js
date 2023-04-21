import _ from 'lodash';


export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_ALL_LINKS':
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case 'CREATE_LINKS':
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
