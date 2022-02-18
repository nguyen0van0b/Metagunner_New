import style from './tokenomics.module.scss'
// const urlImg = '/assets/tokenomics.25d3c6dd_Metagunner.webp'
// const urlTitle = '/assets/Tokenomics_Metagunner.webp'
const urlPIE_CHART = '/assets/PIE_CHART.webp'
const urlTEXT = '/assets/TEXT_AND_NUMS.webp'

function Tokenomics(){
    return(
        <section className={style.tokenomics} id='tokenomics'>
            <h2>TOKENOMICS</h2>
            {/* <div className='container'>
                <div className={style.tokenomicsWrapper}>
                    <div className={style.tokenomicsWrapperTitle}>
                        <img src={urlTitle} alt=""/>
                    </div>
                    <div className={style.tokenomicsWrapperImg} data-aos="fade-up-right" data-aos-once="true" data-aos-delay="300">
                        <img src={urlImg} alt="tokenomic"/>
                    </div>
                    <div className={style.tokenomicsWrapperContent} data-aos="fade-up-left" data-aos-once="true" data-aos-delay="300">
                        <p>Total Supply: <span>400,000,000 $MTG</span> </p>
                        <ul className={style.tokenomicsWrapperContentList}>
                            <li><span>Private sale:</span><span>14%</span></li>
                            <li><span>Public sale:</span><span>2%</span></li>
                            <li><span>Treasury:</span><span>10%</span></li>
                            <li><span>Play to earn:</span><span>28.5%</span></li>
                            <li><span>Marketing & Ecosystem:</span><span>11%</span></li>
                            <li><span>Team:</span><span>20%</span></li>
                            <li><span>Advisors & Partners:</span><span>4%</span></li>
                            <li><span>Liquidity:</span><span>5%</span></li>
                            <li><span>Airdrop:</span><span>0.5%</span></li>
                            <li><span>Reserve:</span><span>5%</span></li>
                            
                            
                        </ul>
                    </div>
                </div>
            </div> */}
            <div className={style.tokenomicsWrapper}>
                <div className={style.tokenomicsPieChart}>
                    <img src={urlPIE_CHART}></img>
                </div>
                <div className={style.tokenomicsText}>
                    <img src={urlTEXT}></img>
                </div>
            </div>
        </section>
    )
}
export default Tokenomics