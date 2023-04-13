import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'



export default function Home() {




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
        <Image src='/img/background_1.jpg' alt='background' width={1536} height={512} priority/>
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

      </main>
    </>
  )
}
