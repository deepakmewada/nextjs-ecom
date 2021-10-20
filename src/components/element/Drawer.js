import React from 'react'
import { GrClose } from 'react-icons/gr'
import { useRecoilState } from 'recoil'
import { isDrawerVisible } from '../../recoil/atoms'

export default function Drawer({children}) {
    const [isVisible, setIsVisible] = useRecoilState(isDrawerVisible);

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
