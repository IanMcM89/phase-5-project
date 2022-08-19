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
    return users.filter((user) => user.username.includes(search));
  } else {
    return users;
  }
}

const initialState = {
  entities: [], //array of users
  status: "idle", //loading status
};

// Reducers:
export default function createUserReducer(name = '') {
  return function reducer(state = initialState, action) {
    switch (action.type) {
      case `${name}/loaded`:
        return {
          ...state,
          status: "idle",
          entities: action.payload,
        };
      case `${name}/loading`:
        return {
          ...state,
          status: "loading",
        };
      default:
        return state;
    }
  }
}
