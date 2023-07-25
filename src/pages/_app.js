import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../style/globals.css'
import 'tailwindcss/tailwind.css'
import {SessionProvider} from "next-auth/react" 

const MyApp = ({ Component, pageProps }) => {
  return (
    <SessionProvider session={pageProps.session}>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    </SessionProvider>
    
  )
}

export default MyApp