import { useEffect } from 'react';
import AOS from "aos";
import style from './layout.module.scss'
const BACKGROUNDMB = '/assets/BACKGROUND-MOBILE.webp'
const BACKGROUND = '/assets/BACKGROUND.webp'
const BACKGROUNDVideo = '/assets/background_PC.mp4'

function Layout({children}){
        useEffect(() => {
                AOS.init();
                AOS.refresh();
              }, []);
        return (
                <div className={style.background} >
                     <img className={style.backgroundPC} src={BACKGROUND} alt=""/>
                     <img className={style.backgroundMB} src={BACKGROUNDMB} alt=""/>
                     <video className={style.backgroundPCV} src={BACKGROUNDVideo} alt="" autoPlay='autoplay' muted='muted'  loop='loop'/>
                        {children}
                </div>
        )
}

export default Layout