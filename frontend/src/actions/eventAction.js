// import  axios from "axios";
// import {NEW_EVENT_REQUEST,NEW_EVENT_SUCCESS,NEW_EVENT_FAIL,CLEAR_ERROR,All_EVENT_SUCCESS,All_EVENT_REQUEST,All_EVENT_FAIL,DELETE_EVENT_REQUEST,DELETE_EVENT_SUCCESS,DELETE_EVENT_FAIL,EVENT_DETAILS_REQUEST,EVENT_DETAILS_SUCCESS,EVENT_DETAILS_FAIL} from "../constants/eventConstants";

// // Create A Event
// export const createEvent = (eventData) => async (dispatch) => {
//     try {
//       dispatch({ type: NEW_EVENT_REQUEST });
  
//       const config = {
//         headers: { "Content-Type": "application/json" },
//       };
  
//       const { data } = await axios.post(
//         `/api/v1/admin/event/new`,
//         eventData,
//         config
//       );
  
//       dispatch({
//         type: NEW_EVENT_SUCCESS,
//         payload: data,
//       });
//     } catch (error) {
//       dispatch({
//         type: NEW_EVENT_FAIL,
//         payload: error.response.data.message,
//       });
//     }
//   };

//   // Get All  Events
// export const getAllEvents = () => async (dispatch) => {
//   try {
//     dispatch({ type: All_EVENT_REQUEST });

//     const { data } = await axios.get("/api/v1/events");

//     dispatch({
//       type: All_EVENT_SUCCESS,
//       payload: data.events,
//     });
//   } catch (error) {
//     dispatch({
//       type: All_EVENT_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

// // Delete Event
// export const deleteEvent = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: DELETE_EVENT_REQUEST });

//     const { data } = await axios.delete(`/api/v1/admin/event/${id}`);

//     dispatch({
//       type: DELETE_EVENT_SUCCESS,
//       payload: data.success,
//     });
//   } catch (error) {
//     dispatch({
//       type: DELETE_EVENT_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

// // Get Event Detail
// export const getEventDetails =(id)=>  async (dispatch) => {

//   try {
//       dispatch({type : EVENT_DETAILS_REQUEST});

//       const {data} = await axios.get(`/api/v1/event/${id}`);
//       dispatch({
//           type : EVENT_DETAILS_SUCCESS,
//           payload : data,
//       })

//   } catch (error) {
//       dispatch({
//           type : EVENT_DETAILS_FAIL,
//           payload : error.response.data.message,
//       })
//   }
// };


// // Clearing errors
//   export const clearErrors = () => async (dispatch) => {
//   dispatch({ type: CLEAR_ERROR });
// };
    