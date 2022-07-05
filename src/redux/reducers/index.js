import { combineReducers } from "redux";
import alertReducers from "./alertReducers";
import authReducers from "./authReducers";
import profileReducers from "./profileReducers";
import userReducers from "./userReducers";

export default combineReducers({
  alertNotification: alertReducers,
  auth: authReducers,
  profile: profileReducers,
  user: userReducers,
});
