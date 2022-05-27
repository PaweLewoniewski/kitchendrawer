import { LocalDataAction, LocalDataState } from "./types";
import { combineReducers } from "redux";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { store } from "./store";

export const initialLocalData: LocalDataState = {
    roomData: [],
    restrictions: [],
};

export function manageLocalDataReducer(state = initialLocalData, action: LocalDataAction) {
    switch (action.type) {
        case "ROOM_DIMENSIONS":
            return { ...state, roomData: action.payload };
        case "RESTRICTIONS":
            return { ...state, restrictions: action.payload };
        default:
            return state;
    }
}

export const multiReducers = combineReducers({
    localDataReducer: manageLocalDataReducer
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default multiReducers;