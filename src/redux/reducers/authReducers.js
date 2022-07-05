import { AuthConstant } from "../constant";
const initialState = {
    payload: "",
    type: '',
    error: ""
}

export default function authReducers(state = initialState, action) {
    switch (action.type) {
        case AuthConstant.LOGINSUCCESS:
            return {
                payload: action.payload,
                type: action.type,
                error: action.error
            };
        case AuthConstant.LOGINFAIL:
            return {
                payload: action.payload,
                type: action.type,
                error: action.error
            };
        case AuthConstant.REGISTERSUCCESS:
            return {
                payload: action.payload,
                type: action.type,
                error: action.error
            };
        case AuthConstant.REGISTERFAIL:
            return {
                payload: action.payload,
                type: action.type,
                error: action.error
            };
        case AuthConstant.VERIFYSUCCESS:
            return {
                payload: action.payload,
                type: action.type,
                error: action.error
            };
        case AuthConstant.VERIFYFAIL:
            return {
                payload: action.payload,
                type: action.type,
                error: action.error
            };
        case AuthConstant.UPDATEPASSWORDSUCCESS:
            return {
                payload: action.payload,
                type: action.type,
                error: action.error
            };
        case AuthConstant.UPDATEPASSWORDFAIL:
            return {
                payload: action.payload,
                type: action.type,
                error: action.error
            };
        default:
            return state
    }
}