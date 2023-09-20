import {useLocale, useTranslations} from "next-intl";
import styles from './styles.module.scss';
import GameImg from "../corp-introduction/assets/games.png";
import Image from "next/image";
import ChartImg from './assets/chart.png';

const CoinDistribution = () => {
    const locale = useLocale();
    const t = useTranslations('CoinDistribution');

    return <div id='coin-distribution' className={`${styles.coinDistribution} container custom-page-container`}>
        <h2>
            {t('header')}
        </h2>
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
                <h5><p>{t('name')}</p></h5>
                <h5><p>{t('amount')}: 1,000,000,000</p></h5>
                <p>{t('built')}</p>
                <p>{t('ethereum')}</p>
                <p>{t('period')}</p>
                <br/>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">{t('thead1')}</th>
                            <th scope="col">{t('thead2')}</th>
                            <th scope="col">{t('thead3')}</th>
                            <th scope="col">{t('thead4')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{t('total')}</td>
                            <td>1&nbsp;000&nbsp;000&nbsp;000</td>
                            <td>100%</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>{t('private')}</td>
                            <td>100 000 000</td>
                            <td>10%</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>{t('ecosystem')}</td>
                            <td>250 000 000</td>
                            <td>25%</td>
                            <td>{t('liquidity')}</td>
                        </tr>
                        <tr>
                            <td>{t('airdrop')}</td>
                            <td>50 000 000</td>
                            <td>20%</td>
                            <td>{t('ranking')}</td>
                        </tr>
                        <tr>
                            <td>{t('RnD')}</td>
                            <td>150 000 000</td>
                            <td>15%</td>
                            <td>{t('rewards')}</td>
                        </tr>
                        <tr>
                            <td>{t('reserve')}</td>
                            <td>150 000 000</td>
                            <td>15%</td>
                            <td>{t('reserve')}</td>
                        </tr>
                        <tr>
                            <td>{t('marketing')}</td>
                            <td>75 000 000</td>
                            <td>7.5%</td>
                            <td>{t('expenses')}</td>
                        </tr>
                        <tr>
                            <td>{t('partners')}</td>
                            <td>75 000 000</td>
                            <td>7.5%</td>
                            <td>{t('alliance')}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}

export default CoinDistribution;
