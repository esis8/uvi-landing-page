import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { AppState, ReducerAction } from "@/types/types";

const initialState: AppState = {
    selectService: 'prueba',
    popupService: false,
};

export const SET_SELECT_SERVICE = 'SET_SELECT_SERVICE';
export const SET_POPUP_SERVICE = 'SET_POPUP_SERVICE';

export const selectServiceReducer = (state = initialState.selectService, action:ReducerAction)=>{
    switch(action.type){
        case SET_SELECT_SERVICE:
            return action.payload;
        default:
            return state;
    }
}

export const popupServiceReducer = (state = initialState.popupService, action:ReducerAction)=>{
    switch(action.type){
        case SET_POPUP_SERVICE:
            return action.payload;
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    selectService: selectServiceReducer,
    popupService: popupServiceReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;