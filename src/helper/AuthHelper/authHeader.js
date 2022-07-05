import { ourInvitationCard } from "../../config/ourInvitationCard";

export function authHeader() {
  let authDetail = JSON.parse(localStorage.getItem("userAuthDetail"));
  if (authDetail) {
    return {
      authorization: "bearer " + authDetail.userAccessToken,
      "content-type": "application/json",
    };
  } else {
    return {
      "content-type": "application/json",
    };
  }
}

export function HandleResponse(response) {
  return response.text().then((text) => {
    if (!response.ok) {
      var callStatus = response.status;
      if (callStatus === 401) {
        localStorage.removeItem("userAuthDetail");
        window.location.href = `${process.env.REACT_APP_LOGOUT_URL}`;
      }
      const error = "Sorry, something went wrong. Please try again later..";
      return Promise.reject(error);
    }
    const data = text && JSON.parse(text);
    return data;
  });
}

export function endPointConnect(url, data, succssType, failType, dispatch) {
  fetch(`${ourInvitationCard.apiUrl}` + url, data)
    .then(HandleResponse)
    .then((result) => {
      const {statusCode,data,message} = result
      if (parseInt(statusCode) === 1000) {
        dispatch({
          type: succssType,
          payload: data,
          error: message,
        });
      } else {
        dispatch({
          type: failType,
          payload: data,
          error: message,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: failType,
        payload: "",
        error: "Sorry, something went wrong. Please try again later.",
        catchError: error,
      });
    });
}

export function authDetail() {
  let user = JSON.parse(localStorage.getItem("userAuthDetail"));
  if (user) {
    return user;
  } else {
    return {
      userId: "",
      userEmailId: "",
      userFirstName: "",
      userLastName: "",
      userType: "",
      userAccessToken: "",
      userRefreshToken: "",
    };
  }
}

export function endPointBaseConnect(url, data, succssType, failType, dispatch) {
  fetch(`${ourInvitationCard.apiBaseUrl}` + url, data)
    .then(HandleResponse)
    .then((result) => {
      if (
        result["message"].toUpperCase() === "SUCCESS" &&
        result.statusCode === 1000
      ) {
        dispatch({
          type: succssType,
          payload: result["data"],
          error: "",
        });
      } else if (result["statusCode"] === "1000") {
        dispatch({
          type: succssType,
          payload: result["data"],
          error: "",
        });
      } else {
        dispatch({
          type: failType,
          payload: "",
          error: result["message"],
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: failType,
        payload: "",
        error: "Sorry, something went wrong. Please try again later.",
        catchError: error,
      });
    });
}
