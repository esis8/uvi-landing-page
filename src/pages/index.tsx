import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/types/types'
import { SetServiceAction, SetPopupServiceAction } from '@/redux/action'
import { dataService } from '@/data/data'
import PopupService from '@/components/PopupService';
import ScrollToTop from '@/components/ScrollToTop';
import FormService from '@/components/formService';



export default function Home() {

const [isMobile, setIsMobile] = useState(false);

useEffect(()=>{
  const handleResize = () => {
    if (typeof window !== 'undefined'){
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth<1000);
    }
  };
  handleResize();
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, [isMobile])

function handleClickService(){
  dispatch(SetPopupServiceAction(!popupService))
}

const dispatch = useDispatch();


const popupService = useSelector((state: RootState)=>state.popupService)

  return (
    <>
      <Head>
          <meta name="description" content="Servicios de mejora profesional para tu carrera" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#470083" />
          <meta name="msapplication-TileColor" content="#bd72fd" />
          <meta name="theme-color" content="#ffffff" />
          <title>UVI | Serv. Profesionales</title>
      </Head>
      <main className='main__home'>
        <div className='portrait'>
          {isMobile ?
           <Image src='/img/background_3.jpg' alt='background' width={1024} height={1024}/>  : 
          <Image src='/img/background_1.jpg' alt='background' width={1536} height={512}/> 
          }
          
          <div className='main__title'>
            <h1>Destaca en el mercado con nuestros servicios</h1>
            <div className='article'>
              <hr/>
              <p>En la actualidad, el mercado laboral es muy competitivo y requiere de un alto nivel de exigencia. Nuestra empresa se enfoca en brindarte los mejores servicios para mejorar tu carrera profesional. Nos especializamos en ayudarte a destacar en el mercado laboral, mediantte la asesoría personalizada de nuestro equipo de expertos en recursos humanos y tecnología de la información. Contáctanos para recibir una orientación adecuada a tus necesidades y comienza a destacarte en el mercado laboral.</p>
            </div>
            <Link href='/about' className='main__button'>
              Más Información
            </Link>
          </div>
        </div>


        <section className='main__section' id='services'>
          <span className='background'></span>
          <h2>Nuestros Servicios</h2>
          <p>Ofrecemos CV y perfiles de LinkedIn personalizados, entrenamiento en entrevistas y guía de búsqueda de empleo para mejorar tus oportunidades de éxito, junto con asesoría especializada. Alcanza tus metas profesionales con nuestros servicios personalizados.</p>
          <article className='groupCard'>
            {
              dataService.map((service)=>(
                <div className='card' key={service.idService}>
                  <h3>{service.title}</h3>
                  <p>{service.descriptionCard}</p>
                  <button className='button__mas' onClick={()=>{(dispatch(SetServiceAction(service.idService))); handleClickService()}} >Leer más</button>
                </div>
              ))
            }
          </article>
            {
              popupService ? <PopupService/> : <></>
            }

        </section>

      <FormService />  

      <ScrollToTop/>

      </main>
    </>
  )
}
