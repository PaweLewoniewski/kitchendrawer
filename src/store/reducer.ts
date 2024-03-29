import { LocalDataActions, LocalDataState } from "./types";
import { combineReducers } from "redux";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { store } from "./store";

export const initialLocalData: LocalDataState = {
    kitchenData: [],
    currentTarget: [],
    playgroundScale:1,
};

export function manageLocalDataReducer(state = initialLocalData, action: LocalDataActions) {
    switch (action.type) {
        case "ROOM_DIMENSIONS":
            return { ...state, kitchenData: action.payload };
        case "CURRENT_TARGET":
            return { ...state, currentTarget: action.payload };
        case "GROUND_SCALE":
            return { ...state, playgroundScale: action.payload };
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