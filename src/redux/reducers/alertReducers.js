import {
  CommonConstant
} from '../constant';
const initialState = {
    payload : "",
    type:'',
    error : ""
}

export default function alertReducers(state = initialState, action) {
    switch (action.type) {
        case CommonConstant.NOTIFICATIONSUCCESS:
          return {
            payload: action.payload,
            type: action.notificationType
          }; 
        case CommonConstant.NOTIFICATIONCLEAR:
          return {
            payload: "",
            type: action.notificationType
          };    
        default:
          return state
      }
}