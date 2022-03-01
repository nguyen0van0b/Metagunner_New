const logo1 = '/assets/chainlink.webp'
const title = '/assets/TECH.webp'
const binance = '/assets/binance-smart-chain.webp'
const Unity = '/assets/Unity_Technologies.webp'
const imgBG_footer = '/assets/BG_footer.webp'
import style from './Technology.module.scss'

function Technology(){
    return(
    <section className={style.technologys} id='partners'>
        <div className={style.container}>
            <div className={style.technologystitle}>
                        {/* <img src={title} alt=""/> */}
                        <h2>TECHNOLOGY INTEGRATION</h2>
            </div>
            <div className={style.technologysWrapper} data-aos="flip-down" data-aos-delay="1000" data-aos-duration="1000" >
                <img src={logo1} alt=""/>
                <img src={binance} alt=""/>
                <img className={style.technologysUnity} src={Unity} alt=""/>
            </div>
        </div>
        <img src={imgBG_footer} alt=""/>
    </section>
    )
}
export default Technology