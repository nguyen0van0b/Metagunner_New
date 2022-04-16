// import urlImg1 from '../../media/game_gallery_02.94e6dc69.webp'
import style from './roadmap.module.scss'
import clsx from 'clsx'
const urlTitle = '/assets/Roadmap_Metagunner.webp'
const urlItem1 = '/assets/Line_Roadmap.webp'
const urlItem2 = '/assets/Q2_2022_Metagunner.webp'
const urlItem3 = '/assets/Q3_2022_Metagunner.webp'
const urlItem4 = '/assets/Q4_2022_Metagunner.webp'

function Roadmap(){
    return(
        <section className={style.roadmap} id='roadmap'>
            <div className={clsx('container',style.roadmapContainer)}>
                <div className={style.roadmapTitle}>
                {/* <img src={urlTitle} alt=""/> */}
                    <h2>ROADMAP</h2>
                </div>
            </div>
        {/* <img src={urlImg1} className={style.imgRoadmap} alt=""/> */}
        <div className={style.roadmapWrapper}>
            <div className={style.roadmapWrapperItem} data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000">
                <h2>Q1 2022</h2>
                <img src={urlItem1} alt=""/>
                <ul>
                    <li>Game Design & Art Concept</li>
                    <li>Game Development</li>
                    <li>Blockchain Development</li>
                </ul>
            </div>
            <div className={style.roadmapWrapperItem} data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
                <h2>Q2 2022</h2>
                <img src={urlItem1} alt=""/>
                <ul>
                    <li>Marketing and Community Building</li>
                    <li>Private Sale</li>
                    <li>IDO</li>
                    <li>Listing</li>
                    <li>Metal Box Sale</li>
                </ul>
            </div>
            <div className={style.roadmapWrapperItem} data-aos="fade-down" data-aos-delay="500" data-aos-duration="1000">
                <h2>Q3 2022</h2>
                <img src={urlItem1} alt=""/>
                <ul>
                    <li>Testnet</li>
                    <li>Game Release Version 1.0 (Mobile, PC)</li>
                    <li>Marketplace</li>
                    <li>Staking</li>
                </ul>
            </div>
            <div className={style.roadmapWrapperItem} data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000">
                <h2>Q4 2022</h2>
                <img src={urlItem1} alt=""/>
                <ul>
                    <li>Game Release Version 2.0</li>
                    <li>Improving Game Graphics</li>
                    <li>Adding More Features, Maps, Weapons,...</li>
                    <li>Event</li>
                    <li>Basecamp</li>
                    <li>MetaGunner Metaverse Development</li>
                    <li>Tournament Event</li>
                </ul>
            </div>
        </div>
    </section>
    )
}
export default Roadmap