// Action Creators:
export const showUserList = () => {
  return {
    type: 'users/shown',
  };
}

export const hideUserList = () => {
  return {
    type: 'users/hidden',
  };
}

// Reducers:
export default function showUsersReducer(state = false, action) {
  switch (action.type) {
    case 'users/shown':
      return state = true;
    case 'users/hidden':
      return state = false;
    default:
      return state;
  }
}