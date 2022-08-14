// Action Creators
export const setFriends = (friends) => {
  return {
    type: "users/setFriends",
    payload: quoteId
  }
}
export const setPending = (pending) => {
  return {
    type: "users/setFriends",
    payload: quoteId
  }
}

export const setUsers = (users) => {
  return {
    type: "quotes/add",
    payload: quote
  }
}

// Reducer
const initialState = [];

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "quotes/add":
      return [...state, action.payload];
    case "quotes/remove":
      return state.filter((quote) => quote.id !== action.payload);
    default:
      return state;
  }
}
