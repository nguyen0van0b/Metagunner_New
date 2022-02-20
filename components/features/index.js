import clsx from "clsx";
import React, { Component} from "react";
import Slider from "react-slick";
import style from "./features.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const urlimgARENA = "/assets/ARENA.webp";
const urlimgARENA_MB = "/assets/ARENA_PIC_MOBILE.webp";
const urlARENA_INFO = "/assets/ARENA_INFO.webp";
const urlARENA_Title = "/assets/ARENA_Title.webp";
const urlimgCAMPAIGN = "/assets/CAMPAIGN.webp";
const urlimgCAMPAIGN_MB = "/assets/CAMPAIGN_PIC_MOBILE.webp";
const urlimgCAMPAIGN_INFO = "/assets/CAMPAIGN_INFO.webp";
const urlCampaign_Title = "/assets/Campaign_Title.webp";
const urlimgLEADERBOARD = "/assets/LEADERBOARD.webp";
const urlimgLEADERBOARD_MB = "/assets/LEADERBOARD_PIC_MOBILE.webp";
const urlimgLEADERBOARD_INFO = "/assets/LEADERBOARD_INFO.webp";
const urlLeaderboard_Title = "/assets/Leaderboard_Title.webp";
const urlimgUPGRADE = "/assets/UPGRADE.webp";
const urlimgUPGRADE_MB = "/assets/UPGRADE_PIC_MOBILE.webp";
const urlimgUPGRADE_INFO = "/assets/UPGRADE_INFO.webp";
const urlUPGRADE_Title = "/assets/UPGRADE_Title.webp";
// const urlimgBlue_Dot = "/assets/Blue_Dot.webp";
// const urlimgGray_Dot = "/assets/Gray_Dot.webp";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "red" }}
      onClick={onClick}
    />
  );
}
// export default class AsNavFor extends Component {
export default class AsNavFor extends Component {
    constructor(props) {
    super(props);
    this.state = {
      Campaign: false,
      ARENA:false,
      UPGRADE:false,
      LEADERBOARD:false
    };
  }
  render() {

    const settings1 = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      // fade: true,
      // cssEase: 'linear',
      nextArrow: <SampleNextArrow />,
      prevArrow: <SampleNextArrow />,
    };
   
    return (
      <section className={style.features} id="features">
        <div className={clsx("container", style.featuresContainer)}>
          <div className={style.featurestitle}>
            <h1>GAME FEATURES</h1>
          </div>
        </div>
        <Slider
          {...settings1}
        >
        <div className={style.featuresSlider}>
          <div className={style.featuresSliderIMG}>
            <div className={style.featuresMB}>
              <img src={urlimgCAMPAIGN_INFO} className={clsx({[style.hide]:!this.state.Campaign})} onClick={() => this.setState({ Campaign: !this.state.Campaign })} alt=""/>
              <img src={urlimgCAMPAIGN_MB} className={clsx({[style.hide]:this.state.Campaign})} onClick={() => this.setState({ Campaign: !this.state.Campaign })} alt=""/>
            </div>
            <div className={style.featuresPC} >
              <img src={urlimgCAMPAIGN} alt=""/>
            </div>
          </div>
          <div className={style.featuresSliderTitle}>
            <img src={urlCampaign_Title} alt=""/>
            <span>
              This mode is the main feature of MetaGunner, where players battle alien monsters to receive valuable rewards. Players embark on exciting adventures and play as soldiers armed with weapons to fight monsters in deadly lands.
            </span>
          </div>
        </div>
        <div className={style.featuresSlider}>
            <div className={style.featuresSliderIMG}>
            <div className={style.featuresMB}>
              <img src={urlARENA_INFO} className={clsx({[style.hide]:!this.state.ARENA})} onClick={() => this.setState({ ARENA: !this.state.ARENA })} alt=""/>
              <img src={urlimgARENA_MB} className={clsx({[style.hide]:this.state.ARENA})} onClick={() => this.setState({ ARENA: !this.state.ARENA })} alt=""/>
              </div>
            <div className={style.featuresPC} >
             <img src={urlimgARENA}alt=""/>
            </div>
            </div>
            <div className={style.featuresSliderTitle}>
              <img src={urlARENA_Title} alt=""/>
              <span>
                Arena Mode consists of two different sub-modes: Battle Royale and Team Fire. Battle Royale is where soldiers join in the deadliest battles to determine the greatest warrior. TeamFire is the place for teams of five to combat and decide which team is the strongest of all.
              </span>
            </div>
        </div>
        <div className={style.featuresSlider}>
            <div className={style.featuresSliderIMG}>
            <div className={style.featuresMB}>
              <img src={urlimgUPGRADE_INFO} className={clsx({[style.hide]:!this.state.UPGRADE})} onClick={() => this.setState({ UPGRADE: !this.state.UPGRADE })} alt=""/>
              <img src={urlimgUPGRADE_MB} className={clsx({[style.hide]:this.state.UPGRADE})} onClick={() => this.setState({ UPGRADE: !this.state.UPGRADE })} alt=""/>
              </div>
            <div className={style.featuresPC} >
               <img src={urlimgUPGRADE} alt=""/>
            </div>
            </div>
            <div className={style.featuresSliderTitle}>
              <img src={urlUPGRADE_Title} alt=""/>
              <span>
              {`Upgrade is a feature that allows players to increase the level and attribute points of weapons. Players need to own an upgrade item (Wrench) and pay a small fee corresponding to the weapon's level to upgrade. Depending on the level, the upgrade has different success rates.`}
              </span>
            </div>
        </div>
        <div className={style.featuresSlider}>
            <div className={style.featuresSliderIMG}>
            <div className={style.featuresMB}>
              <img src={urlimgLEADERBOARD_INFO} className={clsx({[style.hide]:!this.state.LEADERBOARD})} onClick={() => this.setState({ LEADERBOARD: !this.state.LEADERBOARD })} alt=""/>
              <img src={urlimgLEADERBOARD_MB}  className={clsx({[style.hide]:this.state.LEADERBOARD})} onClick={() => this.setState({ LEADERBOARD: !this.state.LEADERBOARD })} alt=""/>
              </div>
            <div className={style.featuresPC} >
              <img src={urlimgLEADERBOARD} alt=""/>
            </div>
            </div>
            <div className={style.featuresSliderTitle}>
              <img src={urlLeaderboard_Title} alt=""/>
              <span>
                The leaderboard is a ranking system in which players are assessed based on their achievements in MetaGunner. Leaderboard helps increase competition among players and create positive challenges, forcing them to play hard to gain significant achievements.
              </span>
            </div>
        </div>
        </Slider>
      </section>
    );
  }
}
