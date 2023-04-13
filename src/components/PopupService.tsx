import React from "react";
import { dataService } from "@/data/data";
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/types/types'
import { SetServiceAction, SetPopupServiceAction } from '@/redux/action'

const PopupService = () => {

    const dispatch = useDispatch();

    const selectService = useSelector((state: RootState)=>state.selectService)
    const popupService = useSelector((state: RootState)=>state.popupService)

    function handleClickCloseService(){
        dispatch(SetPopupServiceAction(!popupService))
        dispatch(SetServiceAction(''))
      }


  return (
    <div className="popup__Service">
        <div className="popUp">
            <i className="bi bi-x" onClick={handleClickCloseService}></i>
            <div className="content__popup">
            {
              dataService.map((service)=>(
                service.idService === selectService ? (
                <div className='card' key={service.idService}>
                  <h3>{service.title}</h3>
                  <p>{service.descriptionLong1}</p>
                  <p>{service.descriptionLong2}</p>
                  <p>{service.descriptionLong3}</p>
                </div>
                ) : ''
              ))
            }
            <button onClick={handleClickCloseService}>Volver</button>
            </div>

        </div>

        
    </div>
    );
};

export default PopupService;