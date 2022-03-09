import { useEffect } from "react";
import style from "./about.module.scss";
import clsx from "clsx";
const urlimg5 = "/assets/SLOGAN.webp";
const BgVideo = "/assets/Background_Video.webp";
const urlImgBg = "/assets/Trailer.mp4";
const urlimgAblout = "/assets/img_Ablout.webp";
const urlimgdestroyer = "/assets/about_destroyer.webp";
const urlimggunner = "/assets/GUNNER.webp";
const urlimgmedic = "/assets/MEDIC.webp";
const urlimgscout = "/assets/SCOUT.webp";
const urlimgrobot = "/assets/bot_robot_6.webp";

function About() {
  useEffect(() => {
    let div = document.getElementById("playnow");
    div.onmouseover = function () {
      div.innerHTML = "<p>Coming Soon</p>";
    };
    div.onmouseout = function () {
      div.innerHTML = "<p>Play Now</p>";
    };
  });
  return (
    <section className={style.about} id="about">
        <div className={style.aboutBG}>
          <img src={urlimggunner} className={style.aboutBGgunner} alt=""/>
          <img src={urlimgmedic} className={style.aboutBGmedic} alt=""/>
          <img src={urlimgscout} className={style.aboutBGscout} alt=""/>
          <img src={urlimgrobot} className={style.aboutBGrobot} alt=""/>
        </div>
      <div className={clsx("container", style.container)}>
        {/* <img src={urlImgBg} className={style.imgBg} alt="" /> */}
        <div className={style.aboutWrapper}>
          <div className={style.aboutWrapperText}>
            <img src={urlimg5} alt="" />
            <h1 data-aos="zoom-in" data-aos-delay="200">
              A world where you can immerse yourself in battles located in a
              barren wilderness inhabited by monsters. Grab your friends and get
              ready to earn valuable rewards and enjoy the moment after stressful
              hours of work.
            </h1>
            <div className={style.WrapperBtn}>
              <a
            href="https://docsend.com/view/6uxnyvc62bd6pya6"
            className={clsx("btn btnPrimary", style.btnMB)}
            target="_blank"
            rel="noreferrer"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <p>Pitch Deck</p>
              </a>
              <a
            className={clsx("btn btnSecondary", style.btnMB)}
            target="_blank"
            rel="noreferrer"
            href="#"
            data-aos="zoom-in"
            data-aos-delay="400"
            id="playnow"
          >
            <p>Play Now</p>
          </a>
            </div>
          </div>
          <img src={urlimgdestroyer} alt=""/>
        </div>
        <div className={style.WrapperVideo}>
            <img src={BgVideo} alt="" />
            <img src={urlimgAblout} className={style.WrapperVideoimgmb} alt=""/>
            <video src={urlImgBg} controls autoPlay='autoplay' muted='muted'></video>
          </div>
      </div>
    </section>
  );
}
export default About;