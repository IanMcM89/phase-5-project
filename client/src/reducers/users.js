// Action Creators:
export const fetchUsers = (url, search) => {
  return (dispatch) => {
    dispatch({ type: `${url}/loading` });
    fetch(url)
      .then((r) => r.json())
      .then((users) => {
        dispatch({
          type: `${url}/loaded`,
          payload: filterUsers(users, search)
        });
      });
  };
}

const filterUsers = (users, search) => {
  if (search) {
    return users.filter((user) => user.username.includes(search))
  } else {
    return users
  }
}

// Reducers:
export default function createReducer(name = '') {
  return function reducer(state = { entities: [] }, action) {
    switch (action.type) {
      case `${name}/loading`:
        return state;
      case `${name}/loaded`:
        return {
          ...state,
          entities: action.payload,
        };
      default:
        return state;
    }
  }
}
