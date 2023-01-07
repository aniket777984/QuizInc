// import {All_EVENT_REQUEST,All_EVENT_SUCCESS,All_EVENT_FAIL,NEW_EVENT_REQUEST,NEW_EVENT_SUCCESS,NEW_EVENT_FAIL,NEW_EVENT_RESET,EVENT_DETAILS_REQUEST,EVENT_DETAILS_SUCCESS,EVENT_DETAILS_FAIL,DELETE_EVENT_SUCCESS,DELETE_EVENT_REQUEST,DELETE_EVENT_FAIL,DELETE_EVENT_RESET,CLEAR_ERROR} from "../constants/eventConstants";
  
// export const eventsReducer = (state = { events: [] }, action) => {
//     switch (action.type) {
//       case All_EVENT_REQUEST:
//         return {
//           loading: true,
//           events: [],
//         };
//       case All_EVENT_SUCCESS:
//         return {
//           loading: false,
//           events : action.payload,
//         };
//       case All_EVENT_FAIL:
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
// export const newEventReducer = (state = { event: {} }, action) => {
//   switch (action.type) {
//     case NEW_EVENT_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case NEW_EVENT_SUCCESS:
//       return {
//         loading: false,
//         success: action.payload.success,
//         event: action.payload.event,
//       };
//     case NEW_EVENT_FAIL:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };
//     case NEW_EVENT_RESET:
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

// export const eventReducer = (state = {}, action) => {
//   switch (action.type) {
//     case DELETE_EVENT_REQUEST: 
//       return {
//         ...state,
//         loading: true,
//       };
//     case DELETE_EVENT_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         isDeleted: action.payload,
//       };
//     case DELETE_EVENT_FAIL: 
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };
//     case DELETE_EVENT_RESET:
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

// export const eventDetailsReducer = (state = { event: {} }, action) => {
//   switch (action.type) {
//     case EVENT_DETAILS_REQUEST:
//       return {
//         loading: true,
//         ...state,
//       };
//     case EVENT_DETAILS_SUCCESS:
//       return {
//         loading: false,
//         event : action.payload.event,
//       };
//     case EVENT_DETAILS_FAIL:
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