import axios from "axios";
import {All_QUESTION_FAIL,All_QUESTION_REQUEST,All_QUESTION_SUCCESS,CLEAR_ERROR,DELETE_QUESTION_REQUEST,DELETE_QUESTION_SUCCESS,DELETE_QUESTION_FAIL,NEW_QUESTION_REQUEST,NEW_QUESTION_SUCCESS,NEW_QUESTION_FAIL} from "../constants/questionConstants";

export const getQuestion = () => async (dispatch) => {
    try {
      dispatch({ type: All_QUESTION_REQUEST });
  
      const { data } = await axios.get("/api/v1/questions");
  
      dispatch({
        type: All_QUESTION_SUCCESS,
        payload: data.questions,
      });
    } catch (error) {
      dispatch({
        type: All_QUESTION_FAIL,
        payload: error.response.data.message,
      });
    }
};

// Delete Question

export const deleteQuestion = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_QUESTION_REQUEST });

    const { data } = await axios.delete(`/api/v1/admin/question/${id}`);

    dispatch({
      type: DELETE_QUESTION_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_QUESTION_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Create A Question
export const createQuestion = (questionData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_QUESTION_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v1/admin/question/new`,
      questionData,
      config
    );

    dispatch({
      type: NEW_QUESTION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_QUESTION_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing errors
export const clearErrors = ()=> async (dispatch) => {
  dispatch({type : CLEAR_ERROR})
}