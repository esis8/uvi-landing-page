import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Header from '@/components/Header'
import { useRouter } from 'next/router'
import routes from '@/routes/route'
import NotFound from './NotFound'




export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter();
  const currentRoute = routes.find((route) => route.path === router.pathname);
  const ComponentToRender = currentRoute?.component || NotFound;

  return (
    <>
      <Header />
      <ComponentToRender {...pageProps} />
    </>
  )
  
}
