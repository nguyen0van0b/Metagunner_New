import { useEffect } from 'react';
import AOS from "aos";
import style from './layout.module.scss'
const BACKGROUNDMB = '/assets/BACKGROUND-MOBILE.webp'
const BACKGROUND = '/assets/BACKGROUND.webp'

function Layout({children}){
        useEffect(() => {
                AOS.init();
                AOS.refresh();
              }, []);
        return (
                <div className={style.background} >
                     <img className={style.backgroundPC} src={BACKGROUND} alt=""/>
                     <img className={style.backgroundMB} src={BACKGROUNDMB} alt=""/>
                        {children}
                </div>
        )
}

export default Layout