import { GlobalProvider } from '../context/GlobalContext'
import 'bootstrap/dist/css/bootstrap.css'
import 'react-toastify/dist/ReactToastify.css';
import '../styles/style.css'
import Layout from '../components/layout';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }) {
  return <GlobalProvider><RecoilRoot><Layout><Component {...pageProps} /></Layout></RecoilRoot></GlobalProvider>
}
export default MyApp