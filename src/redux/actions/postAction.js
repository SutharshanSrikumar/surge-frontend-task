import {
    authHeader,
    endPointConnect
  } from "../../helper/AuthHelper/authHeader";
  
  export const postAction = (url,sucessMessage,failMessage,defaultFailMessage,data) => (dispatch) => {
    try {
      const requestData = {
        method: "POST",
        headers: authHeader(),
        body: JSON.stringify(data),
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