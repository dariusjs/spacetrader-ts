import Layout from '../components/Layout'
import { CookiesProvider } from "react-cookie"
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (    
    <CookiesProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CookiesProvider>
  )
}