import style from './basecamp.module.scss'
import clsx from 'clsx';
import React from "react";
const urlVideo = '/assets/basecamp_Metagunner.mp4'
const BgVideo = "/assets/Background_Video.webp";
const urlimg = '/assets/basecamp_Metagunner.webp'
const urlimgmb = '/assets/basecamp-mb_Metagunner.webp'
const urlimgbasecamp = '/assets/img_BaseCamp.webp'
const urlDotOrange = "/assets/dot_orange.webp";

function Basecamp(){
    return(
        <section className={style.basecamp} id='basecamp'>
            <div className={clsx('container',style.basecampContainer)}>
                <div className={style.basecampTitle}>
                    <h2>BASECAMP</h2>
                </div>
            </div>
            {/* <img src={urlimgmb} alt=""/> */}
            <div className={style.basecampTitleP} >
                <p data-aos="zoom-in" data-aos-delay="400" >Basecamp is the place for soldiers to rest and heal after fighting in fierce battles. Basecamp owners can get more rewards without going into monster fights, reduce ammo recovery time for weapons, and have more chance to receive items such as Weapon Cards, Character Cards... </p>
                <img src={urlDotOrange} alt=""/>
            </div>
            <div className={style.basecampVideo}>
                <img src={BgVideo} alt=""/>
                <img src={urlimgbasecamp} className={style.basecampVideoimgmb} alt=""/>
                <video src={urlVideo} autoPlay='autoplay' muted='muted'   loop='loop'></video>
            </div>
        </section>
    )
}
export default Basecamp