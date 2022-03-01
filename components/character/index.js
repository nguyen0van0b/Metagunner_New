import clsx from "clsx";
import React, { Component } from "react";
import Slider from "react-slick";
import style from "./character.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const urlDestroyer_Icon = "/assets/Destroyer_Icon_Metagunner.webp";
const urlSpecial_Force_Icon = "/assets/Special_Force_Icon_Metagunner.webp";
const urlGunner_Icon = "/assets/Gunner_Icon_Metagunner.webp";
const urlOfficer_Icon = "/assets/Officer_Icon_Metagunner.webp";
const urlScout_Icon = "/assets/Scout_Icon_Metagunner.webp";
const urlSniper_Icon = "/assets/Sniper_Icon_Metagunner.webp";
const urlMedic_Icon = "/assets/Medic_Icon_Metagunner.webp";
const urlBottom_Soldier = "/assets/Bottom_Soldier_Metagunner.webp";
const urlDESTROYER = "/assets/DESTROYER.webp";
const urlSP = "/assets/SP.webp";
const urlGUNNER = "/assets/GUNNER.webp";
const urlOFFICER = "/assets/OFFICER.webp";
const urlSCOUT = "/assets/SCOUT.webp";
const urlSNIPER = "/assets/SNIPER.webp";
const urlMEDIC = "/assets/MEDIC.webp";
const urlDotOrange = "/assets/dot_orange.webp";
const urlRectangle = "/assets/Rectangle_Soldier.webp";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        top: "50%",
        right: 0,
        width: "11%",
        height: "100%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        top: "50%",
        left: 0,
        zIndex: 1,
        width: "11%",
        height: "100%",
      }}
      onClick={onClick}
    />
  );
}
export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    const settings1 = {
      infinite: true,
      fade: true,
      cssEase: 'linear',
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    const settings2 = {
      slidesToShow: 7,
      infinite:true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <section className={style.character} id="character">
        <div className={clsx("container", style.characterContainer)}>
          <div className={style.charactertitle}>
            <h1>SOLDIER</h1>
            <p>
              The 15 characters of MetaGunner are divided into seven types of
              soldiers
            </p>
            <img src={urlDotOrange} alt=""/>
          </div>
        </div>
        <div className={style.characterBG}>
        </div>
        {/* <img src={urlRectangle} alt="" className={style.characterBG}/> */}
        <Slider
          asNavFor={this.state.nav2}
          ref={(slider) => (this.slider1 = slider)}
          className={style.characterSecondSliderWrapper}
          {...settings1}
        >
          <div className={style.characterSecondSlider}>
            <div className={style.Soldier}>
              <img src={urlDESTROYER} className={style.SoldierWrapper}></img>
              <img src={urlBottom_Soldier} className={style.SoldierBottom}></img>
            </div>
            <div className={style.characterSecondSliderTitle} data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-delay="600">
              <h2>Destroyer</h2>
              <span>
                The Destroyer is a heavy-built six-foot-tall man who loves big guns and explosives.
              </span>
            </div>
          </div>
          <div className={style.characterSecondSlider}>
            <div className={style.Soldier}>
              <img src={urlSP} className={style.SoldierWrapper}></img>
              <img src={urlBottom_Soldier} className={style.SoldierBottom}></img>
            </div>
            <div className={style.characterSecondSliderTitle}>
              <h2>Special Force</h2>
              <span>
                The Special Force is an elite trooper specializing in large-scale tasks and always completing them thoroughly.
              </span>
            </div>
          </div>
          <div className={style.characterSecondSlider}>
            <div className={style.Soldier}>
              <img src={urlGUNNER} className={style.SoldierWrapper}></img>
              <img src={urlBottom_Soldier} className={style.SoldierBottom}></img>
            </div>
            <div className={style.characterSecondSliderTitle}>
              <h2>Gunner</h2>
              <span>
                The Gunner is a well-trained Navy SEAL that can improvise, adapt, and overcome any situation.
              </span>
            </div>
          </div>
          <div className={style.characterSecondSlider}>
            <div className={style.Soldier}>
              <img src={urlOFFICER} className={style.SoldierWrapper}></img>
              <img src={urlBottom_Soldier} className={style.SoldierBottom}></img>
            </div>
            <div className={style.characterSecondSliderTitle}>
              <h2>Officer</h2>
              <span>
                The Officer is a respectful but ruthless soldier that holds a record of bringing 21 terrorists to justice by himself. 
              </span>
            </div>
          </div>
          <div className={style.characterSecondSlider}>
            <div className={style.Soldier}>
              <img src={urlSCOUT} className={style.SoldierWrapper}></img>
              <img src={urlBottom_Soldier} className={style.SoldierBottom}></img>
            </div>
            <div className={style.characterSecondSliderTitle}>
              <h2>Scout</h2>
              <span>
                The scout is an expert on gathering information on the enemy lands. He is a master of army-styled ninjutsu.
              </span>
            </div>
          </div>
          <div className={style.characterSecondSlider}>
            <div className={style.Soldier}>
              <img src={urlSNIPER} className={style.SoldierWrapper}></img>
              <img src={urlBottom_Soldier} className={style.SoldierBottom}></img>
            </div>
            <div className={style.characterSecondSliderTitle}>
              <h2>Sniper</h2>
              <span>{`The Sniper is rumored to be a ghost. No one has ever seen him, and no one wants to be his enemy. His targets never survive.`}</span>
            </div>
          </div>
          <div className={style.characterSecondSlider}>
            <div className={style.Soldier}>
              <img src={urlMEDIC} className={style.SoldierWrapper}></img>
              <img src={urlBottom_Soldier} className={style.SoldierBottom}></img>
            </div>
            <div className={style.characterSecondSliderTitle}>
              <h2>Medic</h2>
              <span>
                The Medic is an extremely experienced battlefield doctor, but do not make the mistake of underestimating his fighting skills.
              </span>
            </div>
          </div>
        </Slider>
        <Slider
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
          slidesToShow={7}
          swipeToSlide={true}
          focusOnSelect={true}
          variableWidth= {true}
          className={style.characterFirstSlider}
          {...settings2}
        >
          <div style={{width:'calc(100% / 7 )'}}>
                <img src={urlDestroyer_Icon} alt=""/>
          </div>
          <div style={{width:'calc(100% / 7 )'}}>
                <img src={urlSpecial_Force_Icon} alt=""/>
          </div>
          <div style={{width:'calc(100% / 7 )'}}>
                <img src={urlGunner_Icon} alt=""/>
          </div>
          <div style={{width:'calc(100% / 7 )'}}>
                <img src={urlOfficer_Icon} alt=""/>
          </div>
          <div style={{width:'calc(100% / 7 )'}}>
                <img src={urlScout_Icon} alt=""/>
          </div>
          <div style={{width:'calc(100% / 7 )'}}>
                <img src={urlSniper_Icon} alt=""/>
          </div>
          <div style={{width:'calc(100% / 7 )'}}>
                <img src={urlMedic_Icon} alt=""/>
          </div>
        </Slider>
      </section>
    );
  }
}
