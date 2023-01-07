import { createStore , combineReducers , applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools } from "redux-devtools-extension";
import {questionsReducer,questionReducer, newQuestionReducer} from "./reducers/questionReducer";
import {allUsersReducer, leaderboardUsersReducer, profileReducer, userDetailsReducer, userReducer} from "./reducers/userReducer";



const reducer = combineReducers({
    questions : questionsReducer,
    allUsers : allUsersReducer,
    user : userReducer,
    profile : profileReducer,
    question : questionReducer,
    userDetails : userDetailsReducer,
    newQuestion : newQuestionReducer,
    leaderBoard  : leaderboardUsersReducer,
});

let initialState = {
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);


export default store;