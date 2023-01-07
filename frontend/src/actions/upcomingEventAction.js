// import {All_UPCOMING_EVENT_FAIL,All_UPCOMING_EVENT_REQUEST,All_UPCOMING_EVENT_SUCCESS,CLEAR_ERROR,NEW_UPCOMING_EVENT_REQUEST,NEW_UPCOMING_EVENT_SUCCESS,NEW_UPCOMING_EVENT_FAIL,DELETE_UPCOMING_EVENT_REQUEST,DELETE_UPCOMING_EVENT_SUCCESS,DELETE_UPCOMING_EVENT_FAIL,UPCOMING_EVENT_DETAILS_REQUEST,UPCOMING_EVENT_DETAILS_SUCCESS,UPCOMING_EVENT_DETAILS_FAIL} from "../constants/upcomingEventConstant";
// import axios from "axios";

// // Get All Upcoming Events
// export const getAllUpcomingEvents = () => async (dispatch) => {
//     try {
//       dispatch({ type: All_UPCOMING_EVENT_REQUEST });
  
//       const { data } = await axios.get("/api/v1/upcomingevents");
  
//       dispatch({
//         type: All_UPCOMING_EVENT_SUCCESS,
//         payload: data.events,
//       });
//     } catch (error) {
//       dispatch({
//         type: All_UPCOMING_EVENT_FAIL,
//         payload: error.response.data.message,
//       });
//     }
//   };

//   export const createUpcomingEvent = (upcomingEventData) => async (dispatch) => {
//     try {
//       dispatch({ type: NEW_UPCOMING_EVENT_REQUEST });
  
//       const config = {
//         headers: { "Content-Type": "application/json" },
//       };
  
//       const { data } = await axios.post(
//         `/api/v1/admin/upcomingevent/new`,
//         upcomingEventData,
//         config
//       );
  
//       dispatch({
//         type: NEW_UPCOMING_EVENT_SUCCESS,
//         payload: data,
//       });
//     } catch (error) {
//       dispatch({
//         type: NEW_UPCOMING_EVENT_FAIL,
//         payload: error.response.data.message,
//       });
//     }
//   };

// // Delete Upcoming Event
// export const deleteUpcomingEvent = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: DELETE_UPCOMING_EVENT_REQUEST });

//     const { data } = await axios.delete(`/api/v1/admin/upcomingevent/${id}`);

//     dispatch({
//       type: DELETE_UPCOMING_EVENT_SUCCESS,
//       payload: data.success,
//     });
//   } catch (error) {
//     dispatch({
//       type: DELETE_UPCOMING_EVENT_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

// export const getUpcomingEventDetails =(id)=>  async (dispatch) => {

//   try {
//       dispatch({type : UPCOMING_EVENT_DETAILS_REQUEST});

//       const {data} = await axios.get(`/api/v1/upcomingevent/${id}`);
//       dispatch({
//           type : UPCOMING_EVENT_DETAILS_SUCCESS,
//           payload : data,
//       })

//   } catch (error) {
//       dispatch({
//           type : UPCOMING_EVENT_DETAILS_FAIL,
//           payload : error.response.data.message,
//       })
//   }
// };

  
//   // Clearing errors
//   export const clearErrors = () => async (dispatch) => {
//     dispatch({ type: CLEAR_ERROR });
//   };
  