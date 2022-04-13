import React, { useEffect } from 'react'
import { GrClose } from 'react-icons/gr'
import { useRecoilState, useRecoilValue } from 'recoil'
import { isDrawerVisible, cartCount } from '../../recoil/atoms'

export default function Drawer({children}) {
    const [isVisible, setIsVisible] = useRecoilState(isDrawerVisible);
    const cartCountVal = useRecoilValue(cartCount)

    useEffect(() => {
        if(cartCountVal === 0){
            setIsVisible(false)
        }
    },[cartCountVal])
    
    return (
        <div  className={`drawer-modal ${isVisible ? "show" : null}`}>
            <button className="drawer-close-button" onClick={() => setIsVisible(false)}><GrClose/></button>
            {children}
        </div>
    )
}
