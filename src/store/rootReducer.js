import { combineReducers } from "redux";
import { counterFuncReducer } from "./reducers/counterFuncReducer";
import { counterClassReducer } from "./reducers/counterClassReducer";
import { usersReducer } from "./reducers/userReducer";

export const rootReducer = combineReducers({
    counterFunc: counterFuncReducer,
    counterClass: counterClassReducer,
    users: usersReducer
})