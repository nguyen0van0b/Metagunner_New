import style from './tokenomics.module.scss'
// // const urlImg = '/assets/tokenomics.25d3c6dd_Metagunner.webp'
// // const urlTitle = '/assets/Tokenomics_Metagunner.webp'
// const urlPIE_CHART = '/assets/PIE_CHART.webp'
// const urlTEXTMB = '/assets/TEXT_AND_NUMS_MB.webp'

// function Tokenomics(){
//     return(
//         <section className={style.tokenomics} id='tokenomics'>
//             <h2>TOKENOMICS</h2>
//             {/* <div className='container'>
//                 <div className={style.tokenomicsWrapper}>
//                     <div className={style.tokenomicsWrapperTitle}>
//                         <img src={urlTitle} alt=""/>
//                     </div>
//                     <div className={style.tokenomicsWrapperImg} data-aos="fade-up-right" data-aos-once="true" data-aos-delay="300">
//                         <img src={urlImg} alt="tokenomic"/>
//                     </div>
//                     <div className={style.tokenomicsWrapperContent} data-aos="fade-up-left" data-aos-once="true" data-aos-delay="300">
//                         <p>Total Supply: <span>400,000,000 $MTG</span> </p>
//                         <ul className={style.tokenomicsWrapperContentList}>
//                             <li><span>Private sale:</span><span>14%</span></li>
//                             <li><span>Public sale:</span><span>2%</span></li>
//                             <li><span>Treasury:</span><span>10%</span></li>
//                             <li><span>Play to earn:</span><span>28.5%</span></li>
//                             <li><span>Marketing & Ecosystem:</span><span>11%</span></li>
//                             <li><span>Team:</span><span>20%</span></li>
//                             <li><span>Advisors & Partners:</span><span>4%</span></li>
//                             <li><span>Liquidity:</span><span>5%</span></li>
//                             <li><span>Airdrop:</span><span>0.5%</span></li>
//                             <li><span>Reserve:</span><span>5%</span></li>
//                         </ul>
//                     </div>
//                 </div>
//             </div> */}
//             <div className={style.tokenomicsWrapper}>
//                 <div className={style.tokenomicsPieChart}>
//                     <img src={urlPIE_CHART}></img>
//                 </div>
//                 <div className={style.tokenomicsText}>
//                     <img src={urlTEXTMB} className={style.TextMB}></img>
//                 </div>
//             </div>
//         </section>
//     )
// }
// export default Tokenomics
import React, { Component } from 'react';import dynamic from 'next/dynamic';
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });
class ApexChart extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        series: [25000000, 100000000, 35000000, 210000000, 40000000, 220000000, 130000000, 40000000, 50000000, 150000000],
        options: {
          chart: {
            width: 380,
            type: 'pie',
          },
          legend: {
            position: 'right',
            width: '40%',
            height: '40%',
            fontSize: '20px',
          },
          labels: ['Seed', 'Private sale', 'Public sale', 'Play to earn', 'Marketing', 'Ecosystem and Staking', 'Team', 'Advisors and Partners', 'Liquidity', 'Development'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              }
            }
          }]
        },
      
      
      };
    }
    render() {
      return (
        

  <div id="Tokenomics">
      <div className={style.tokenomicsTotal}>
          <h2>Total supply: 1,000,000,000 MTG</h2>
      </div>
<ApexCharts options={this.state.options} series={this.state.series} type="pie" className={style.tokenomicsPiechart} />
</div>


      );
    }
  }

  export default ApexChart