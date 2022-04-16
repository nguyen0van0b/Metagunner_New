import style from './Event.module.scss'
import clsx from 'clsx';
import React from "react";
const urlBUTTON = '/assets/event/Community_AD.webp'
const urlBUTTON2 = '/assets/event/Weekly_AD_2.webp'
const urlBG = '/assets/event/bg_event.webp'
const urlrobot1 = '/assets/event/robot1.webp'
const urlrobot2 = '/assets/event/robot2.webp'

function Event(){
    const [show,setShow] = React.useState(false)
const  closeDialog = () =>{
    setShow(true)
}
    return(
        <section className={clsx(style.Event, {[style.hide]:show})}>
            <div className={style.EventWrapper}>
                <img src={urlBG} className={style.EventBG} alt=""/>
                <img src={urlrobot1} className={style.Eventrobot1} alt=""/>
                <img src={urlrobot2} className={style.Eventrobot2} alt=""/>
                <div className={style.EventWrapperbtn}>
                    <a href='https://gleam.io/competitions/3Zh0X' target="_blank" rel="noopener noreferrer"><img src={urlBUTTON} alt=""/></a>
                    <a href='https://gleam.io/competitions/P2Jr2' target="_blank" rel="noopener noreferrer"><img src={urlBUTTON2} alt=""/></a>
                </div>
            <span className={style.EventWrapperClose} onClick={closeDialog}>x</span>
            </div>
        </section>
    )
}
export default Event