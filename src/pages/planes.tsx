import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Head from 'next/head'

export default function Planes() {


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


    return (
        <>
            <Head>
                <title>UVI | Planes</title>
            </Head>
            <main className='planes__page'>
                {isMobile ?
                <Image src='/img/background_6.jpg' alt='background' width={768} height={768}/>  : 
                <Image src='/img/background_5.jpg' alt='background' width={1536} height={512}/> 
                }
                <div className='planes__title'>
                    <h2>Escoge el mejor plan que se adapte a vos!</h2>
                </div>

                <section className='planes__section'>
                    <div className='plan_card'>
                        <h2>Plan Básico</h2>
                        <p>Incluye los servicios 1, 2, 3</p>
                        <p className='price_plan'>ARS 10.000,00</p>
                    </div>

                    <div className='plan_card'>
                        <h2>Plan VIP</h2>
                        <p>Incluye los servicios 1 al 5</p>
                        <p className='price_plan'>ARS 20.000,00</p>
                    </div>

                    <div className='plan_card'>
                        <h2>Plan PREMIUM</h2>
                        <p>Incluye todos los servicios</p>
                        <p className='price_plan'>ARS 30.000,00</p>
                    </div>

                </section>


            </main>
        </>
    )
    
}