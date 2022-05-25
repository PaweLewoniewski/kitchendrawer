import {  LocalDataAction, LocalDataState } from "./types";
import { combineReducers } from "redux";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import * as actionTypes from "./actionTypes";
import { store } from "./store";

export const initialLocalData: LocalDataState = {
    roomDimensions:[],
    textField: '',
    pagination: '1',
    currency: 'USD',
    maxPrice: '',
    dlc: false
};

export function manageLocalDataReducer(state = initialLocalData, action: LocalDataAction) {
    switch (action.type) {
        case "ROOM_DIMENSIONS":
            return { ...state, roomDimensions: action.payload };
        case "PAGINATION":
            return { ...state, pagination: action.payload };
        case "CURRENCY":
            return { ...state, currency: action.payload };
        case "MAX_PRICE":
            return { ...state, maxPrice: action.payload };
        case "DLC":
            return { ...state, dlc: action.payload };
        default:
            return state;
    }
}

export const multiReducers = combineReducers({
    localData: manageLocalDataReducer
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default multiReducers;