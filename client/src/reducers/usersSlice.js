// Action Creators:
export const fetchUsers = (url, search) => {
  return (dispatch) => {
    dispatch({ type: `${url}/usersLoading` });
    fetch(url)
      .then((r) => r.json())
      .then((users) => {
        dispatch({
          type: `${url}/usersLoaded`,
          payload: filterUsers(users, search)
        });
      });
  };
}

const filterUsers = (users, search) => {
  if (search) {
    search = search.toLowerCase();
    return users.filter((user) => user.username.toLowerCase().includes(search));
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
export default function createUsersReducer(name = '') {
  return function reducer(state = initialState, action) {
    switch (action.type) {
      case `${name}/usersLoaded`:
        return {
          ...state,
          status: "idle",
          entities: action.payload,
        };
      case `${name}/usersLoading`:
        return {
          ...state,
          status: "users loading",
        };
      case `${name}/add`:
        return {
          ...state,
          entities: [...state.entities, action.payload],
        };
      case `${name}/remove`:
        const newEntities = state.entities.filter(
          (user) => user.id !== action.payload
        );
        return {
          ...state,
          entities: newEntities,
        };
      default:
        return state;
    }
  }
}
