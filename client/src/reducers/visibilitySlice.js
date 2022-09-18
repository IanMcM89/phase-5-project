// Action Creators:
export const showUsers = () => {
  return {
    type: 'users/shown',
  };
}

export const hideUsers = () => {
  return {
    type: 'users/hidden',
  };
}

// Reducers:
export default function visibilityReducer(state = false, action) {
  switch (action.type) {
    case 'users/shown':
      return state = true;
    case 'users/hidden':
      return state = false;
    default:
      return state;
  }
}