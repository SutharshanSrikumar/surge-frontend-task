import { UserConstant } from "../constant";
const initialState = {
  payload: "",
  type: '',
  error: ""
}

export default function userReducers(state = initialState, action) {
  switch (action.type) {
    case UserConstant.GETUSERLISTSUCCESS:
      return {
        payload: action.payload,
        type: action.type,
        error: action.error
      };
    case UserConstant.GETUSERLISTFAIL:
      return {
        payload: action.payload,
        type: action.type,
        error: action.error
      };
    case UserConstant.GETUSERDETAILSUCCESS:
      return {
        payload: action.payload,
        type: action.type,
        error: action.error
      };
    case UserConstant.GETUSERDETAILFAIL:
      return {
        payload: action.payload,
        type: action.type,
        error: action.error
      };
    case UserConstant.SAVEUSERDETAILSUCCESS:
      return {
        payload: action.payload,
        type: action.type,
        error: action.error
      };
    case UserConstant.SAVEUSERDETAILFAIL:
      return {
        payload: action.payload,
        type: action.type,
        error: action.error
      };
    default:
      return state
  }
}