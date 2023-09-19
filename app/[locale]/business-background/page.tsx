import {useLocale, useTranslations} from "next-intl";
import Image from 'next/image';
import styles from './styles.module.scss';
import Label from '../../components/label/label';
import ChartImg from "./assets/chart.png";

const BusinessBackground = () => {
    const locale = useLocale();
    const t = useTranslations('BusinessBackground');

    return <div className={`${styles.businessBackground} container custom-page-container`}>
        <h2>
            Business Background
        </h2>
        <br />
        <br />
        <p><Label text='Global' /></p>
        <h4 className='blue-colored-text'><p>The Necessity for Korean Language Education for Foreigners due to increase of Korean Wave Fans</p></h4>
        <div className='row'>
            <div className='col-lg-6 mb-3'>
                <Image
                    src={ChartImg}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    alt=""
                />
            </div>
            <div className='col-lg-6 mb-3'>
                <h5><p>1st and 2nd place of which makes Korea&apos;s cultural content hard to enjoy</p></h5>
                <div className='row'>
                    <div className='col-6'>
                        <h5 className={styles.redTitle}>Drama</h5>
                        <ol>
                            <li>Inconvenient Subtitle/dubbing 11.5%</li>
                            <li>Difficult and unfamiliar Korean 10.8%</li>
                        </ol>
                    </div>
                    <div className='col-6'>
                        <h5 className={styles.redTitle}>Movie</h5>
                        <ol>
                            <li>Difficult and unfamiliar Korean 14.6%</li>
                            <li>Inconvenient Subtitle/dubbing 12.5%</li>
                        </ol>
                    </div>
                    <div className='col-6'>
                        <h5 className={styles.redTitle}>Music</h5>
                        <ol>
                            <li>Difficult and unfamiliar Korean 16.0%</li>
                            <li>Too same music genre is 11.1%</li>
                        </ol>
                    </div>
                    <div className='col-6'>
                        <h5 className={styles.redTitle}>Entertainment</h5>
                        <ol>
                            <li>Difficult and unfamiliar Korean 13.1%</li>
                            <li>Fun for only Koreans 11.4%</li>
                        </ol>
                    </div>
                    <div className='col-6'>
                        <h5 className={styles.redTitle}>Cartoons</h5>
                        <ol>
                            <li>Difficult and unfamiliar Korean 13.4%</li>
                            <li>Inconvenient Subtitle/dubbing 11.5%
                            </li>
                        </ol>
                    </div>
                    <div className='col-6'>
                        <h5 className={styles.redTitle}>Books</h5>
                        <ol>
                            <li>Lack of translation 17.7%

                            </li>
                            <li>Expensive cost of use 11.2%</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <br />
        <br />
        <br />
        <p><Label text='Ministry of Education Ministry of Culture, Sports and Tourism' /></p>
        <h4 className='blue-colored-text'><p>Government-led Expansion of Korean Language Education Projects for Foreigners</p></h4>
        <p>The number of Sejong Institute increased by 244, and the number of students increased by 110</p>
        <div className='row'>
            <div className='col-lg-6 col-md-6 mb-5'>
                <div className={`${styles.expanstionBlock} ${styles.block1} mb-2`} />
                <p>Status of Sejong Institute around the world (244 locations in 84 countries)</p>

                <div>- 2021 Sejong Institute budget increased by 44.9% year-on-year (51.3 billion)</div>
                <div>- Ministry of Education&apos;s 2021 budget increased 100% year-on-year</div>
            </div>
            <div className='col-lg-6 col-md-6 mb-5'>
                <div className={`${styles.expanstionBlock} ${styles.block2}`} />
            </div>
        </div>
    </div>
}

export default BusinessBackground;
