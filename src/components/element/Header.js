import React, {useContext, useEffect, useState} from 'react';
import * as Cookies from "js-cookie";
import { FiHeart, FiSearch, FiShoppingBag } from "react-icons/fi";
import { GlobalContext } from '../../context/GlobalContext';
import { getSessionCookie } from '../../utils/cookie';
import Cart from './Cart';
import CustomModal from './CustomModal';
import Login from './Login';
import Register from './Register';
import { useRouter } from 'next/router'
import { useRecoilState, useRecoilValue } from 'recoil';
import { cartCount, isDrawerVisible } from '../../recoil/atoms';
import Drawer from './Drawer';

const Header = () => {
    const router = useRouter()
    const context = useContext(GlobalContext);
    const cartCountVal = useRecoilValue(cartCount)
    const [isVisible, setIsVisible] = useRecoilState(isDrawerVisible)
    const { userContext, cart } = context;
    const { isLoggedIn, user, } =  userContext.userState
    const [isLoginOpen, setIsLoginOpen] = useState(false)
    const [isRegisterOpen, setIsRegisterOpen] = useState(false)
    const session = getSessionCookie()

    useEffect(()=> {
        if(!session){
            localStorage.removeItem('user')
        }
        if(localStorage.getItem('user')){
            const ls = localStorage.getItem('user')
            const user = JSON.parse(ls);
            userContext.userDispatch({
              type:'store-user',
              payload: user
            })
          }
    },[])

    const logOut = () => {
        Cookies.remove("session");
        userContext.userDispatch({
            type:"remove-user"
        })
    }

    return (
        <header>
            <Drawer><Cart/></Drawer>
            <div className="container">
                <div className="header-wrap">
                    {/* <img className="" src="/logo.svg" alt="eCommerce" /> */}
                    <a onClick={() => router.push(`/`)} >eCommerce</a>
                    <div className="">
                        <a href="#" className="">Home</a>
                        <a href="#" className="">Shop</a>
                        <a href="#" className="">Contact</a>
                    </div>
                    <div className="">
                        <a href="#" className=""><FiSearch /></a>
                        
                        <a className="cart-cta" onClick={() => setIsVisible(true)}><FiShoppingBag /> {cartCountVal > 0 ? <sup className="badge">{cartCountVal}</sup> : null }</a>
                        {!isLoggedIn ? 
                        <><a className="" onClick={() => setIsLoginOpen(true)}><span>Login</span></a><a className="" onClick={() => setIsRegisterOpen(true)}><span>Signup</span></a> </>
                        : <><a className="" onClick={() => logOut()}><span>Logout</span></a></> }

                    </div>
                </div>
                {isLoginOpen && 
                    <CustomModal isOpen={isLoginOpen} title="Login" toggleModal={setIsLoginOpen}>
                        <Login toggleModal={setIsLoginOpen}/>
                    </CustomModal>}

                {isRegisterOpen && 
                    <CustomModal isOpen={isRegisterOpen} title="Register" toggleModal={setIsRegisterOpen}>
                        <Register toggleModal={setIsRegisterOpen}/>
                    </CustomModal>}
            </div>       
            {isVisible ? <div className="overlay" onClick={() => setIsVisible(false)}></div> : null }
        </header>
    );
}

export default Header;
