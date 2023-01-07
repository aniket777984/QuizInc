// import {
//   All_SPONSER_REQUEST,
//   All_SPONSER_FAIL,
//   All_SPONSER_SUCCESS,
//   CLEAR_ERROR,NEW_SPONSER_REQUEST,NEW_SPONSER_SUCCESS,NEW_SPONSER_FAIL,NEW_SPONSER_RESET,DELETE_SPONSER_REQUEST,DELETE_SPONSER_SUCCESS,DELETE_SPONSER_FAIL,DELETE_SPONSER_RESET
// } from "../constants/sponserConstants";

// export const sponsersReducer = (state = { sponsers: [] }, action) => {
//   switch (action.type) {
//     case All_SPONSER_REQUEST:
//       return {
//         loading: true,
//         sponsers: [],
//       };
//     case All_SPONSER_SUCCESS:
//       return {
//         loading: false,
//         sponsers : action.payload,
//       };
//     case All_SPONSER_FAIL:
//       return {
//         loading: false,
//         error: action.payload,
//       };
//     case CLEAR_ERROR :
//       return {
//         ...state,
//         error: null,
//       };
//     default:
//       return state;
//   }
// };

// export const newSponserReducer = (state = { sponser: {} }, action) => {
//   switch (action.type) {
//     case NEW_SPONSER_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case NEW_SPONSER_SUCCESS:
//       return {
//         loading: false,
//         success: action.payload.success,
//         sponser: action.payload.sponser,
//       };
//     case NEW_SPONSER_FAIL:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };
//     case NEW_SPONSER_RESET:
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

// export const sponserReducer = (state = {}, action) => {
//   switch (action.type) {
//     case DELETE_SPONSER_REQUEST: 
//       return {
//         ...state,
//         loading: true,
//       };
//     case DELETE_SPONSER_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         isDeleted: action.payload,
//       };
//     case DELETE_SPONSER_FAIL: 
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };
//     case DELETE_SPONSER_RESET:
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