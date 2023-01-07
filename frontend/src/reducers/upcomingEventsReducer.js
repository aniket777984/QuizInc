// import {All_UPCOMING_EVENT_REQUEST,All_UPCOMING_EVENT_SUCCESS,All_UPCOMING_EVENT_FAIL,CLEAR_ERROR,NEW_UPCOMING_EVENT_REQUEST,NEW_UPCOMING_EVENT_SUCCESS,NEW_UPCOMING_EVENT_FAIL,NEW_UPCOMING_EVENT_RESET,DELETE_UPCOMING_EVENT_REQUEST,DELETE_UPCOMING_EVENT_SUCCESS,DELETE_UPCOMING_EVENT_FAIL,DELETE_UPCOMING_EVENT_RESET,UPCOMING_EVENT_DETAILS_REQUEST,UPCOMING_EVENT_DETAILS_SUCCESS,UPCOMING_EVENT_DETAILS_FAIL} from "../constants/upcomingEventConstant";
  
// export const upcomingEventsReducer = (state = { upcomingEvents: [] }, action) => {
//     switch (action.type) {
//       case All_UPCOMING_EVENT_REQUEST:
//         return {
//           loading: true,
//           upcomingEvents: [],
//         };
//       case All_UPCOMING_EVENT_SUCCESS:
//         return {
//           loading: false,
//           upcomingEvents : action.payload,
//         };
//       case All_UPCOMING_EVENT_FAIL:
//         return {
//           loading: false,
//           error: action.payload,
//         };
//       case CLEAR_ERROR :
//         return {
//           ...state,
//           error: null,
//         };
//       default:
//         return state;
//     }
// };
// export const newUpcomingEventReducer = (state = { upcomingEvent: {} }, action) => {
//   switch (action.type) {
//     case NEW_UPCOMING_EVENT_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case NEW_UPCOMING_EVENT_SUCCESS:
//       return {
//         loading: false,
//         success: action.payload.success,
//         sponser: action.payload.event,
//       };
//     case NEW_UPCOMING_EVENT_FAIL:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };
//     case NEW_UPCOMING_EVENT_RESET:
//       return {
//         ...state,
//         success: false,
//       };
//     case CLEAR_ERROR:
//       return {
//         ...state,
//         error: null,
//       };
//     default:
//       return state;
//   }
// };

// export const upcomingEventReducer = (state = {}, action) => {
//   switch (action.type) {
//     case DELETE_UPCOMING_EVENT_REQUEST: 
//       return {
//         ...state,
//         loading: true,
//       };
//     case DELETE_UPCOMING_EVENT_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         isDeleted: action.payload,
//       };
//     case DELETE_UPCOMING_EVENT_FAIL: 
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };
//     case DELETE_UPCOMING_EVENT_RESET:
//       return {
//         ...state,
//         isDeleted: false,
//       };
//     case CLEAR_ERROR:
//       return {
//         ...state,
//         error: null,
//       };
//     default:
//       return state;
//   }
// };

// export const UpcomingEventDetailsReducer = (state = { upcomingEvent: {} }, action) => {
//   switch (action.type) {
//     case UPCOMING_EVENT_DETAILS_REQUEST:
//       return {
//         loading: true,
//         ...state,
//       };
//     case UPCOMING_EVENT_DETAILS_SUCCESS:
//       return {
//         loading: false,
//         upcomingEvent: action.payload.event,
//       };
//     case UPCOMING_EVENT_DETAILS_FAIL:
//       return {
//         loading: false,
//         error: action.payload,
//       };
//     case CLEAR_ERROR:
//       return {
//         ...state,
//         error: null,
//       };
//     default:
//       return state;
//   }
// };