import React, { useState } from "react";
import { FormData } from "@/types/types";

const FormService = () => {

    const servicePlans = ['Plan Basico', 'Plan VIP', 'Plan PREMIUM'];

    const [formData, setFormData] = useState<FormData>({
        name: '',
        lastname: '',
        email: '',
        phone: '',
        attachment: null,
        plan: '',
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
        const {name, value} = e.target;
        setFormData(prevFormData => ({...prevFormData, [name]: value}));
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const file = e.target.files && e.target.files[0];
        setFormData(prevFormData => ({...prevFormData, attachment: file}));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log(formData)
        setFormData(
            {
                name: '',
                lastname: '',
                email: '',
                phone: '',
                attachment: null,
                plan: '',
            }
        )
    }


  return (
        <div className="form__service" id="contacto">
            <h2>Contáctanos</h2>

            <form onSubmit={handleSubmit}>

                <div className="form__item">
                    <label htmlFor="name">Nombre*:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Ingrese su nombre"/>
                </div>

                <div className="form__item">
                    <label htmlFor="lastname">Apellido*:</label>
                    <input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleInputChange} required placeholder="Ingrese su apellido"/>
                </div>

                <div className="form__item">
                    <label htmlFor="email">email*:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="Ingrese su correo electrónico"/>
                </div>               

                <div className="form__item">
                    <label htmlFor="phone">Tel.*:</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required placeholder="Ingrese su número de telefono"/>
                </div> 

                <div className="form__item input-file">
                    <label htmlFor="attachment">Subir CV:</label>
                    <div className="mask">
                        <div className="false_button">Seleccionar Archivo</div>
                        <input type="file" id="attachment" name="attachment" onChange={handleFileChange} />
                    </div>
                </div>

                <div className="form__item">
                    <label htmlFor="plan">Plan elegido:</label>
                    <select id="plan" name="plan" value={formData.plan} onChange={handleInputChange} required>
                    <option value="">Seleccione un plan</option>
                    {servicePlans.map(plan => (
                    <option key={plan} value={plan}>{plan}</option>
                     ))}
                    </select>
                </div> 


                <button type="submit">Enviar</button>
            </form>
        </div>
        );
};

export default FormService;