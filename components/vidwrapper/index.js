import { useEffect } from 'react'
import style from './vidwrapper.module.scss'
const urlLogo = '/assets/Logo.webp'
const urlimg1 = '/assets/layer1_Metagunner.webp'
const urlimg4 = '/assets/layer4_Metagunner.webp'
const urlimg2 = '/assets/SKY-MOBILE.webp'
const urlimg8 = '/assets/SOLDIERS_AND_2_MAPS.webp'

function Vidwrapper(){
    return(
        <section className={style.Vidwrapper} id='vidwrapper'>
            <div className={style.banner_PC}>
                <img src={urlimg1} className={style.image1} data-value="5"  alt="" />
                <img src={urlLogo} className={style.image2} data-value="5"  alt=""/>
                <img src={urlimg4} className={style.image3} data-value="5"  alt=""/>
            </div>
            <div className={style.banner_MB}>
                <img src={urlimg2} className={style.image1} data-value="5" alt="" />
                <img src={urlLogo} className={style.image2} data-value="5" alt=""/>
                <img src={urlimg8} className={style.image3} data-value="5" alt=""/>
            </div>
        </section>
    )
}
export default Vidwrapper