// import {
//   CLEAR_ERROR,
//   All_SPONSER_REQUEST,
//   All_SPONSER_SUCCESS,
//   All_SPONSER_FAIL,NEW_SPONSER_REQUEST,NEW_SPONSER_SUCCESS,NEW_SPONSER_FAIL,DELETE_SPONSER_REQUEST,DELETE_SPONSER_SUCCESS,DELETE_SPONSER_FAIL
// } from "../constants/sponserConstants";
// import axios from "axios";

// // Get All Sponsers
// export const getAllSponser = () => async (dispatch) => {
//   try {
//     dispatch({ type: All_SPONSER_REQUEST });

//     const { data } = await axios.get("/api/v1/sponsers");

//     dispatch({
//       type: All_SPONSER_SUCCESS,
//       payload: data.sponsers,
//     });
//   } catch (error) {
//     dispatch({
//       type: All_SPONSER_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

// //create sponser
// export const createSponser = (sponserData) => async (dispatch) => {
//   try {
//     dispatch({ type: NEW_SPONSER_REQUEST });

//     const config = {
//       headers: { "Content-Type": "application/json" },
//     };

//     const { data } = await axios.post(
//       `/api/v1/admin/sponser/new`,
//       sponserData,
//       config
//     );

//     dispatch({
//       type: NEW_SPONSER_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: NEW_SPONSER_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

// // Delete Sponser
// export const deleteSponser = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: DELETE_SPONSER_REQUEST });

//     const { data } = await axios.delete(`/api/v1/admin/sponser/${id}`);

//     dispatch({
//       type: DELETE_SPONSER_SUCCESS,
//       payload: data.success,
//     });
//   } catch (error) {
//     dispatch({
//       type: DELETE_SPONSER_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };



// // Clearing errors
// export const clearErrors = () => async (dispatch) => {
//   dispatch({ type: CLEAR_ERROR });
// };
