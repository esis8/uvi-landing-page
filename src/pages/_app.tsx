import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Header from '@/components/Header'
import { useRouter } from 'next/router'
import routes from '@/routes/route'
import NotFound from './NotFound'
import { Provider } from 'react-redux'
import store from '@/redux/store'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from '@/components/Footer'



export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter();
  const currentRoute = routes.find((route) => route.path === router.pathname);
  const ComponentToRender = currentRoute?.component || NotFound;

  return (
    <Provider store={store}>
      <Header />
      <ComponentToRender {...pageProps} />
      <Footer />
    </Provider>
  )
  
}
