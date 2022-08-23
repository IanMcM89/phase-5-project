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

export const addUser = (url, user) => {
  return {
    type: `${url}/add`,
    payload: user
  }
}

export const removeUser = (url, id) => {
  return {
    type: `${url}/remove`,
    payload: id
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
      case `${name}/set`:
        return {
          ...state,
          entities: action.payload,
        };
      case `${name}/remove`:
        return state.filter((user) =>
          user.id !== action.payload
        );
      default:
        return state;
    }
  }
}
