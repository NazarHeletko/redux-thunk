const SET_USERS = "SET_USERS";

const initialState = {
  users: [],
};

//redux thunk example

export const getUsersThunk = () => {
  return async (dispatch) => {
    try {
      const users = await fetch("https://jsonplaceholder.typicode.com/users");
      const json = await users.json();
      dispatch({type: SET_USERS, users: json })
    } catch (error) {}
  };
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        users: action.users,
      };
    default:
      return state;
  }
};
