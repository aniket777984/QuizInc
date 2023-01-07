import {All_QUESTION_REQUEST,All_QUESTION_SUCCESS,All_QUESTION_FAIL,CLEAR_ERROR,DELETE_QUESTION_REQUEST,DELETE_QUESTION_SUCCESS,DELETE_QUESTION_FAIL,DELETE_QUESTION_RESET,NEW_QUESTION_REQUEST,NEW_QUESTION_SUCCESS,NEW_QUESTION_FAIL,NEW_QUESTION_RESET} from "../constants/questionConstants";

export const questionsReducer = (state = { questions : [] } ,action) => {
    switch(action.type){
        case All_QUESTION_REQUEST : 
        return{
            loading:true,
            questions:[]
        };
        case All_QUESTION_SUCCESS :
        return{
           loading : false,
           questions : action.payload
        };
        case All_QUESTION_FAIL :
        return {
            loading : false,
            error:action.payload
        };
        case CLEAR_ERROR :
        return{
            ...state,
            error:null
        };
        default :
        return state;
    }
};

export const questionReducer = (state = {}, action) => {
    switch (action.type) {
      case DELETE_QUESTION_REQUEST: 
        return {
          ...state,
          loading: true,
        };
      case DELETE_QUESTION_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: action.payload,
        };
      case DELETE_QUESTION_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case DELETE_QUESTION_RESET:
        return {
          ...state,
          isDeleted: false,
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

export const newQuestionReducer = (state = { question: {} }, action) => {
  switch (action.type) {
    case NEW_QUESTION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_QUESTION_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        question: action.payload.question,
      };
    case NEW_QUESTION_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_QUESTION_RESET:
      return {
        ...state,
        success: false,
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