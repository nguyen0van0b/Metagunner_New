import { useEffect } from "react";
import style from "./about.module.scss";
import clsx from "clsx";
const urlimg5 = "/assets/SLOGAN.webp";
const BgVideo = "/assets/Background_Video.webp";
// const urlImgBg = "/assets/banner_Metagunner.webp";

function About() {
  useEffect(() => {
    let div = document.getElementById("playnow");
    div.onmouseover = function () {
      div.innerHTML = "Coming Soon";
    };
    div.onmouseout = function () {
      div.innerHTML = "Play Now";
    };
  });
  return (
    <section className={style.about} id="about">
      <div className={clsx("container", style.container)}>
        {/* <img src={urlImgBg} className={style.imgBg} alt="" /> */}
        <div className={style.aboutWrapper}>
          <img src={urlimg5} alt="" />
          <h1 data-aos="zoom-in" data-aos-delay="200">
            A world where you can immerse yourself in battles located in a
            barren wilderness inhabited by monsters. Grab your friends and get
            ready to earn valuable rewards and enjoy the moment after stressful
            hours of work.
          </h1>
          <div className={style.WrapperBtn}>
              <a
            href="https://drive.google.com/file/d/1VnfYeY06nvHLtG-8IvbJEX9avpFSyO4l/view"
            className={clsx("btn btnPrimary", style.btnMB)}
            target="_blank"
            rel="noreferrer"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            Lite Paper
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
            Play Now
              </a>
          </div>
          <div className={style.WrapperVideo}>
            <img src={BgVideo} alt="" />
            <video></video>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
