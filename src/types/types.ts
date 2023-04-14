export interface FormData {
    name: string;
    lastname: string;
    email: string;
    phone: string;
    attachment?: File | null;
    plan: string;
}

export interface SetSelectService{
    type: 'SET_SELECT_SERVICE';
    payload: string;
}

export interface SetPopupService{
    type: 'SET_POPUP_SERVICE';
    payload: boolean;
}


export interface AppState {
    selectService: string;
    popupService: boolean;
}

export type ReducerAction = SetSelectService | SetPopupService;

export type RootState = AppState;

