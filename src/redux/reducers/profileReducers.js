import { ProfileConstant } from "../constant";
const initialState = {
    payload: "",
    type: '',
    error: ""
}

export default function profileReducers(state = initialState, action) {
    switch (action.type) {
        case ProfileConstant.GETPROFILESUCCESS:
            return {
                payload: action.payload,
                type: action.type,
                error: action.error
            };
        case ProfileConstant.GETPROFILEFAIL:
            return {
                payload: action.payload,
                type: action.type,
                error: action.error
            };
        case ProfileConstant.SAVEPROFILESUCCESS:
            return {
                payload: action.payload,
                type: action.type,
                error: action.error
            };
        case ProfileConstant.SAVEPROFILEFAIL:
            return {
                payload: action.payload,
                type: action.type,
                error: action.error
            };
        default:
            return state
    }
}