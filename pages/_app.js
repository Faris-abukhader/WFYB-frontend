import '../styles/globals.css'
import 'animate.css';
import 'atropos/css'
import { SessionProvider } from "next-auth/react"
import { wrapper } from '../store/store'
import { LocalizationProvider } from '../localization/locationlizationContext'
import {Provider} from 'react-redux'
function MyApp({
  Component,
  pageProps: {session,user,...pageProps },
}) {
  const {store,props} = wrapper.useWrappedStore(pageProps)
  return (
    <Provider store={store}>
    <SessionProvider session={session}>
      <LocalizationProvider>
     <Component {...props} />
     </LocalizationProvider>
    </SessionProvider>
    </Provider>
  )
}
export default MyApp
