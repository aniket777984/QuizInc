import {ALL_USERS_FAIL,ALL_USERS_REQUEST,ALL_USERS_SUCCESS,CLEAR_ERROR,LOGIN_FAIL,LOGIN_REQUEST,LOGIN_SUCCESS,LOAD_USER_REQUEST,LOAD_USER_SUCCESS,LOAD_USER_FAIL,LOGOUT_SUCCESS,LOGOUT_FAIL,REGISTER_USER_REQUEST,REGISTER_USER_SUCCESS,REGISTER_USER_FAIL,UPDATE_SCORE_SUCCESS,UPDATE_SCORE_FAIL,UPDATE_STATE_SUCCESS,UPDATE_STATE_FAIL,UPDATE_STATE_REQUEST,UPDATE_USER_STATE_REQUEST,UPDATE_USER_STATE_SUCCESS,UPDATE_USER_STATE_FAIL,UPDATE_SCORE_REQUEST,DELETE_USER_REQUEST,DELETE_USER_SUCCESS,DELETE_USER_FAIL,DELETE_USER_RESET,USER_DETAILS_REQUEST,USER_DETAILS_SUCCESS,USER_DETAILS_FAIL,UPDATE_USER_REQUEST,UPDATE_USER_SUCCESS,UPDATE_USER_FAIL,UPDATE_USER_RESET,LEADERBOARD_USERS_REQUEST,LEADERBOARD_USERS_SUCCESS,LEADERBOARD_USERS_FAIL,UPDATE_PROFILE_REQUEST,UPDATE_PROFILE_SUCCESS,UPDATE_PROFILE_FAIL,UPDATE_PROFILE_RESET,UPDATE_PASSWORD_REQUEST,UPDATE_PASSWORD_SUCCESS,UPDATE_PASSWORD_FAIL,UPDATE_PASSWORD_RESET} from "../constants/userConstants";

export const allUsersReducer = (state = { users: [] }, action) => {
    switch (action.type) {
      case ALL_USERS_REQUEST:
      case UPDATE_STATE_REQUEST :
        return {
          ...state,
          loading: true,
        };
      case ALL_USERS_SUCCESS:
        return {
          ...state,
          loading: false,
          users: action.payload,
        };
      case UPDATE_STATE_SUCCESS :
        return{
          ...state,
          isUpdated : true,
          loading : false,
        } 
      case ALL_USERS_FAIL: 
        return {
          loading: false,
          error: action.payload,
        };
      case UPDATE_STATE_FAIL:
        return{
          loading:false,
          error : action.payload,
          isUpdated:false,
        } 
      case "UPDATE_STATE_RESET" :
        return{
          ...state,
          isUpdated : false,
        }
      case CLEAR_ERROR:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
};

export const leaderboardUsersReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case LEADERBOARD_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LEADERBOARD_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case LEADERBOARD_USERS_FAIL: 
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const userReducer = (state = {user : {} } , action ) => {
  switch(action.type){
    case LOGIN_REQUEST :
    case REGISTER_USER_REQUEST :
    case LOAD_USER_REQUEST :
    case UPDATE_USER_STATE_REQUEST :
    case UPDATE_SCORE_REQUEST : 
    return{
      loading : true,
      isAuthenticated : false,
    };
    case LOGIN_SUCCESS :
    case LOAD_USER_SUCCESS :
    case REGISTER_USER_SUCCESS :
    case UPDATE_SCORE_SUCCESS :
    case UPDATE_USER_STATE_SUCCESS :
    return{
      ...state,
      isAuthenticated:true,
      loading : false,
      user : action.payload,
    };
    case LOGOUT_SUCCESS:
    return {
      loading: false,
      user: null,
      isAuthenticated: false,
    };
    case LOGIN_FAIL :
    case REGISTER_USER_FAIL:
    return{
      ...state,
      loading: false,
      isAuthenticated: false,
      user: null,
      error: action.payload,
    };
    case LOAD_USER_FAIL:
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
      case LOGOUT_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case UPDATE_SCORE_FAIL :
      case UPDATE_USER_STATE_FAIL :
        return{
          ...state,
          loading : false,
          error : action.payload,
        };
    case CLEAR_ERROR :
    return{
      ...state,
      error:null,
    };
    default : 
    return state;
  }
};

export const profileReducer = (state = {} , action) => {
  switch (action.type) {
    case DELETE_USER_REQUEST:
    case UPDATE_USER_REQUEST:
    case UPDATE_PROFILE_REQUEST:
    case UPDATE_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_USER_SUCCESS:
    case UPDATE_PROFILE_SUCCESS:
    case UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload.success,
        message: action.payload.message,
      };
    case UPDATE_USER_FAIL :
    case UPDATE_PROFILE_FAIL:
    case UPDATE_PASSWORD_FAIL:
      return {
        ...state,
        loading:false,
        error : action.payload
      }
    case DELETE_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_USER_RESET:
      return {
        ...state,
        isDeleted: false,
     };
    case UPDATE_USER_RESET :
    case UPDATE_PROFILE_RESET:
    case UPDATE_PASSWORD_RESET: 
     return {
       ...state,
       isUpdated: false,
    };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };

    case USER_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
