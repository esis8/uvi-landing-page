import { SetSelectService, SetPopupService } from "@/types/types";

export const SetServiceAction = (service: string):SetSelectService=>({
    type: 'SET_SELECT_SERVICE',
    payload: service,
})

export const SetPopupServiceAction = (state:boolean):SetPopupService=>({
    type: 'SET_POPUP_SERVICE',
    payload: state,
})