import React from 'react';
import { ToastContainer } from 'react-toastify';
import Header from '../element/Header'
import Footer from '../element/Footer'
import { useRouter } from 'next/router';

const Layout = ({children}) => {
    const router = useRouter();
    console.log(router.pathname)

    return (
        <>
            <ToastContainer
                position="top-center"
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            {/* <Head>
                <title>E Commerce</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" /> *
            </Head> */}
            { router.pathname !== "/checkout" ? <Header/> : null }
            <div className={`wrapper ${router.pathname == "/checkout" ? "checkout" : ""}`}>
            {children}
            </div>
            { router.pathname !== "/checkout" ? <Footer/> : null }
        </>
    );
}


export default Layout;
