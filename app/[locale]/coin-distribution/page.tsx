import {useLocale, useTranslations} from "next-intl";
import styles from './styles.module.scss';
import GameImg from "../corp-introduction/assets/games.png";
import Image from "next/image";
import ChartImg from './assets/chart.png';

const CoinDistribution = () => {
    const locale = useLocale();
    const t = useTranslations('Roadmap');

    return <div className={`${styles.coinDistribution} container custom-page-container`}>
        <h2>
            Coin Distribution
        </h2>
        <br/>
        <br/>
        <div className='row'>
            <div className='col-lg-5 col-md-6 mb-5'>
                <Image
                    src={ChartImg}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    alt=""/>
            </div>
            <div className='col-lg-7 col-md-6'>
                <h5><p>Coin Name: Wordcoin</p></h5>
                <h5><p>Total Amount of Issue: 1,000,000,000</p></h5>
                <p>WordCoin is built on Ethereum smart contract.</p>
                <p>Ethereum is the most widely used utility token among alt tokens that emerged after Bitcoin.</p>
                <p>It has the effect of shortening the overall development period due to its ease of development and high accessibility, and has development and promotional strengths in planning the use of utility tokens as it has the largest existing utility blockchain users.</p>
                <br/>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">WORD Coin</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Percentage</th>
                            <th scope="col">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Total</td>
                            <td>1&nbsp;000&nbsp;000&nbsp;000</td>
                            <td>100%</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Private sales</td>
                            <td>100 000 000</td>
                            <td>10%</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Ecosystem</td>
                            <td>250 000 000</td>
                            <td>25%</td>
                            <td>Liquidity, supply and gamification</td>
                        </tr>
                        <tr>
                            <td>Airdrop</td>
                            <td>50 000 000</td>
                            <td>20%</td>
                            <td>Task and ranking rewards</td>
                        </tr>
                        <tr>
                            <td>RnD Infrastructure</td>
                            <td>150 000 000</td>
                            <td>15%</td>
                            <td>Task and ranking rewards</td>
                        </tr>
                        <tr>
                            <td>Reserve</td>
                            <td>150 000 000</td>
                            <td>15%</td>
                            <td>Reserve</td>
                        </tr>
                        <tr>
                            <td>Marketing</td>
                            <td>75 000 000</td>
                            <td>7.5%</td>
                            <td>Promotional expenses</td>
                        </tr>
                        <tr>
                            <td>Partners</td>
                            <td>75 000 000</td>
                            <td>7.5%</td>
                            <td>Agency and company alliance</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}

export default CoinDistribution;
