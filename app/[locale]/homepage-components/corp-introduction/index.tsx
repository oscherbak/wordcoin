import {useTranslations} from "next-intl";
import Image from 'next/image';
import styles from './styles.module.scss';
import Label from '../../../components/label/label';
import GameImg from './assets/games.png';
import Game2Img from './assets/games2.png';
import Game3Img from './assets/games3.png';
import PhotoImg from './assets/photo.png';

const CorpIntroduction = () => {
    const t = useTranslations('CorpIntroduction');

    return <div id='corp-introduction' className={`${styles.corpIntroduction} container custom-page-container`}>
        <h2 className='page-headline'>
            {t('header')}
        </h2>
        <br />
        <p><Label text={t('global')} /></p>
        <h5 className='blue-colored-text'><p>{t('necessity')}</p></h5>
        <br />
        <br />


        <div className="container">
            <ul className="timeline">
                <li>
                    <div className="timeline-image blue">2019</div>
                    <div className="timeline-panel">
                        <h4 className='subheading'><b>{t('tourism')}</b> </h4>
                        <p>{t('boardGame')}</p>
                        <p>{t('hanjul')}</p>
                        <p>{t('gameOfMonth')}</p>
                        <p>
                            {t('functional')}
                        </p>
                    </div>
                </li>
                <li className="timeline-inverted ">
                    <div className="timeline-image blue">2020</div>
                    <div className="timeline-panel">
                        <h4 className='subheading'><b>{t('HR')}</b></h4>
                        <p>{t('duty')}</p>
                        <p>{t('standard')}</p>
                        <p>{t('customs')}</p>
                    </div>
                </li>
                <li>
                    <div className="timeline-image blue">2021</div>
                    <div className="timeline-panel">
                        <h4 className='subheading'>
                            <b>{t('HR22')}</b>
                        </h4>
                        <p>{t('officials')}</p>
                        <p>{t('devInstitute')}
                        </p>
                    </div>
                </li>
                <li className="timeline-inverted ">
                    <div className="timeline-image blue">2022</div>
                    <div className="timeline-panel">
                        <h4 className='subheading'>
                            <b>{t('cultural')}</b>
                        </h4>
                        <p>{t('foreigners')}</p>
                        <p>{t('metamento')}
                        </p>
                        <p>
                            {t('util')}
                        </p>
                        <p>
                            {t('service')}
                        </p>
                    </div>
                </li>
                <li className="timeline-inverted">
                    <div className="timeline-image">
                        2023
                    </div>
                </li>
            </ul>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className='row'>
            <div className='col-lg-5 mb-5'>
                <h1 className='blue-colored-text mb-2'>{t('team')}</h1>
                <div className='row'>
                    <div className='col-10' style={{ paddingRight: 25 }}>
                        <h2>{t('ceo')}</h2>
                        <ul>
                            <li>{t('bachelor')}</li>
                            <li>{t('edutech')}</li>
                            <li>{t('experience')}</li>
                            <li>{t('chiefEng')}</li>
                            <li>{t('patent')}</li>
                            <li>{t('gameBusiness')}</li>
                            <li>{t('lecture')}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-lg-7'>
                <h2 className='blue-colored-text mb-2'>{t('teamwork')}</h2>
                <div style={{height: 3, backgroundColor: '#08b8f1', marginBottom: 15}} />
                <div className='row'>
                    <div className='col-6'>
                        <h3>{t('cpo')} </h3>
                        <ul>
                            <li>{t('cpoExp')}</li>
                            <li>{t('director')}</li>
                            <li>{t('ribbon')}</li>
                            <li>{t('funple')}</li>
                            <li>{t('nellbiz')}</li>
                            <li>{t('forest')}</li>
                        </ul>
                    </div>
                    <div className='col-6'>
                        <h4>{t('LeeYoseph.title')}</h4>
                        <div className={styles.secondaryText}>{t('LeeYoseph.exp')}</div>
                        <div className={styles.tinyText}>{t('LeeYoseph.responsibility')}</div>
                        <br/>
                        <h4>{t('AhnDongBong.title')}</h4>
                        <div className={styles.secondaryText}>{t('AhnDongBong.exp')}</div>
                        <div className={styles.tinyText}>{t('AhnDongBong.responsibility')}</div>
                        <br/>
                        <h4>{t('KimJiWoon.title')}</h4>
                        <div className={styles.secondaryText}>{t('KimJiWoon.title')}</div>
                        <div className={styles.tinyText}>{t('KimJiWoon.responsibility')}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default CorpIntroduction;
