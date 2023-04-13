import Image from 'next/image'
import Head from 'next/head'

export default function About() {

    return (
        <>
            <Head>
                <title>UVI | Sobre UVI</title>
            </Head>
            <main className='about__page'>
                <Image src='/img/background_2.jpg' alt='background' width={1536} height={512} priority/>
                <div className='about__title'>
                    <h2>Por qué elegir nuestros servicios!</h2>
                </div>

                <section className='about__section'>
                    <ol>
                        <li>
                            <h3>01. CV Personalizados.</h3>
                            <p>Nuestro equipo de expertos en recursos humanos te ayudará a optimizar y mejorar tu CV para que destaque entre los demás. Trabajamos contigo para asegurarnos de comprender tus objetivos profesionales y logros, y presentarlos de manera clara y efectiva a los empleadores potenciales.</p>
                        </li>
                        <li>
                            <h3>02. Optimización De Perfiles De LinkedIn.</h3>
                            <p>Cada vez más empleadores utilizan LinkedIn para buscar candidatos y aprender más sobre ellos. Por eso, es importante que tu perfil sea coherente con tu CV, esté completo y sea atractivo para que los reclutadores quieran contactarte. Nuestro equipo de expertos en LinkedIn revisará tu perfil y te proporcionará sugerencias para optimizarlo.</p>
                        </li>
                        <li>
                            <h3>03. Entrenamiento En Entrevistas.</h3>
                            <p>Las entrevistas pueden ser muy estresantes, pero con la práctica y los consejos adecuados, puedes mejorar y sentirte más seguro/a. Nuestro equipo te proporcionará una guía completa de consejos para prepararte para entrevistas y te ayudará a realizar simulacros de entrevistas para que puedas practicar tus habilidades de comunicación y presentación.</p>
                        </li>
                        <li>
                            <h3>04. Guía De Búsqueda De Empleo.</h3>
                            <p>Buscar empleo puede ser un desafío, especialmente si no sabes por dónde empezar. Nuestro equipo te proporcionará una guía completa para la búsqueda de empleo, desde la identificación de tus objetivos y las mejores oportunidades hasta la postulación efectiva para cada trabajo. Te ayudaremos a destacar en cada etapa del proceso de búsqueda de empleo.</p>
                        </li>
                        <li>
                            <h3>05. Networking Con Otros Profesionales.</h3>
                            <p>El networking es una parte importante de la búsqueda de empleo. Conectarte con otros profesionales de tu área puede ayudarte a encontrar oportunidades laborales que de otra forma no habrías conocido. Nuestro equipo te ayudará a identificar y conectarte con otros profesionales de tu área para que puedas aumentar tus oportunidades de éxito en la búsqueda de empleo.</p>
                        </li>
                        <li>
                            <h3>06. Asesoría Especializada En Tu Campo.</h3>
                            <p>Cada campo profesional tiene sus propias peculiaridades y desafíos. Por eso, nuestro equipo te proporcionará asesoría especializada en tu campo, ya sea que estés buscando un primer trabajo o quieras dar el siguiente paso en tu carrera. Te ayudaremos a maximizar tus oportunidades de éxito en tu campo profesional con nuestros conocimientos y experiencia.</p>
                        </li>
                    </ol>
                </section>



            </main>
        </>
    )
    
}