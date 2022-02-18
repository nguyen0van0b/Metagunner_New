import clsx from "clsx";
import React, { Component } from "react";
import Slider from "react-slick";
import style from "./features.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const urlimgARENA = "/assets/ARENA.webp";
const urlARENA_Title = "/assets/ARENA_Title.webp";
const urlimgCAMPAIGN = "/assets/CAMPAIGN.webp";
const urlCampaign_Title = "/assets/Campaign_Title.webp";
const urlimgLEADERBOARD = "/assets/LEADERBOARD.webp";
const urlLeaderboard_Title = "/assets/Leaderboard_Title.webp";
const urlimgUPGRADE = "/assets/UPGRADE.webp";
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
export default class AsNavFor extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     nav1: null,
  //     nav2: null,
  //   };
  // }

  // componentDidMount() {
  //   this.setState({
  //     nav1: this.slider1,
  //     nav2: this.slider2,
  //   });
  // }

  render() {
    const settings1 = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      cssEase: 'linear',
      nextArrow: <SampleNextArrow />,
      prevArrow: <SampleNextArrow />,
      // appendDots: dots => (
      //   <div
      //     style={{
      //       backgroundColor: "#ddd",
      //       borderRadius: "10px",
      //       padding: "10px"
      //     }}
      //   >
      //     <ul style={{ margin: "0px" }}> {dots} </ul>
      //   </div>
      // ),
      // customPaging: i => (
      //   <div
      //     style={{
      //       // width: "30px",
      //       // background: "blue",
      //       // border: "1px blue solid"
      //     }}
      //   >
      //     {/* {i + 1} */}
      //   </div>
      // ),
    };
    return (
      <section className={style.features} id="features">
        <div className={clsx("container", style.featuresContainer)}>
          <div className={style.featurestitle}>
            <h1>GAME FEATURES</h1>
          </div>
        </div>
        <Slider
          // asNavFor={this.state.nav2}
          // ref={(slider) => (this.slider1 = slider)}
          {...settings1}
        >
        <div className={style.featuresSlider}>
          <div className={style.featuresSliderIMG}>
            <img src={urlimgCAMPAIGN} alt=""/>
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
              <img src={urlimgARENA} alt=""/>
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
              <img src={urlimgUPGRADE} alt=""/>
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
              <img src={urlimgLEADERBOARD} alt=""/>
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
