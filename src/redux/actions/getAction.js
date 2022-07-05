import {
    authHeader,
    endPointConnect
  } from "../../helper/AuthHelper/authHeader";
  
  export const getAction = (url,sucessMessage,failMessage,defaultFailMessage) => (dispatch) => {
    try {
      const requestData = {
        method: "POST",
        headers: authHeader(),
      };
      endPointConnect(
        url,
        requestData,
        sucessMessage,
        failMessage,
        dispatch
      );
    } catch (err) {
      dispatch({
        type: sucessMessage,
        payload: "",
        error: defaultFailMessage,
      });
    }
  };