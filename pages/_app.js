import '../styles/globals.css'
import 'animate.css';
import 'atropos/css'
import { SessionProvider } from "next-auth/react"
import { wrapper } from '../store/store'
import { LocalizationProvider } from '../localization/locationlizationContext'
function MyApp({
  Component,
  pageProps: {session,user,...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <LocalizationProvider>
     <Component {...pageProps} />
     </LocalizationProvider>
    </SessionProvider>
  )
}
export default wrapper.withRedux(MyApp)  
