import {useTranslations} from "next-intl";
import styles from './styles.module.scss';
import Label from '../../../components/label/label';

const StreetsImg = '/assets/metaverse/streets.png';
const CityImg = '/assets/metaverse/city.png';
const TrainingImg = '/assets/metaverse/training.png';
const ClockImg = '/assets/metaverse/clock.png';
const LandImg = '/assets/metaverse/land.png';
const VRImg = '/assets/metaverse/vr.png';
const HistoryImg = '/assets/metaverse/history.png';

const MetaverseIntroduction = () => {
    const t = useTranslations('MetaverseIntroduction');

    return <div id='metaverse-introduction' className={`${styles.metaverseIntroduction} custom-page-container`}>
        <div className='container'>
            <h2 className='page-headline'>
                {t('header')}
            </h2>
            <div>{t('txt1')}</div>
            <div>{t('txt2')}</div>
            <div>{t('txt3')}</div>
        </div>

        <div className={styles.block}>
            <div className='container'>
                <p><Label text={t('core')} /></p>
                <h4 className='blue-colored-text'>{t('subheader')}</h4>
                <p><b>{t('learnPlaces')}</b></p>
                <img
                    src={StreetsImg} width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    alt=""/>
            </div>
        </div>

        <div className={`${styles.block} ${styles.red}`}>
            <div className='container'>
                <p><Label text={t('service')} /></p>
                <h4 className='blue-colored-text'>{t('vocabulary')}</h4>
                <p><b>{t('parts')}</b></p>
                <img
                    src={CityImg} width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    alt=""/>
            </div>
        </div>
        <div className={styles.block}>
            <div className='container'>
                <p><Label text={t('scalability')} /></p>
                <h4 className='blue-colored-text'><p>{t('space')}</p></h4>
                <div>
                    <div className='row'>
                        <div className='col-lg-3 col-md-6 mb-3'>
                            <div className={styles.imageContainer} style={{ backgroundImage: 'url(/assets/metaverse/1.png)' }} />
                            <div className='mb-1'><b>{t('actual')}</b></div>
                            <p className='blue-colored-text'><b>{t('university')}</b></p>
                        </div>
                        <div className='col-lg-3 col-md-6 mb-3'>
                            <div className={styles.imageContainer} style={{ backgroundImage: 'url(/assets/metaverse/2.png)' }} />
                            <div className='mb-1'><b>{t('untact')}</b></div>
                            <p className='blue-colored-text'><b>{t('online')}</b></p>
                        </div>
                        <div className='col-lg-3 col-md-6 mb-3'>
                            <div className={styles.imageContainer} style={{ backgroundImage: 'url(/assets/metaverse/3.png)' }} />
                            <div className='mb-1'><b>{t('special')}</b></div>
                            <p className='blue-colored-text'><b>{t('factory')}</b></p>
                        </div>
                        <div className='col-lg-3 col-md-6 mb-3'>
                            <div className={styles.imageContainer} style={{ backgroundImage: 'url(/assets/metaverse/4.png)' }} />
                            <div className='mb-1'><b>{t('living')}</b></div>
                            <p className='blue-colored-text'><b>{t('hospital')}</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={`${styles.block} ${styles.blue}`}>
            <div className='container'>
                <p><Label text={t('contents')} /></p>
                <h4 className='blue-colored-text'><p>{t('variety')}</p></h4>
                <div>
                    <div className='row'>
                        <div className='col-lg-3 col-md-6 mb-3'>
                            <div className={styles.imageContainer} style={{ backgroundImage: 'url(/assets/metaverse/5.png)' }} />
                            <div className='mb-1'><b>{t('story')}</b></div>
                            <p><>{t('narrative')}</></p>
                        </div>
                        <div className='col-lg-3 col-md-6 mb-3'>
                            <div className={styles.imageContainer} style={{ backgroundImage: 'url(/assets/metaverse/6.png)' }} />
                            <div className='mb-1'><b>{t('fun')}</b></div>
                            <p><>{t('collect')}</></p>
                        </div>
                        <div className='col-lg-3 col-md-6 mb-3'>
                            <div className={styles.imageContainer} style={{ backgroundImage: 'url(/assets/metaverse/7.png)' }} />
                            <div className='mb-1'><b>{t('differ')}</b></div>
                            <p><>{t('miniGames')}</></p>
                        </div>
                        <div className='col-lg-3 col-md-6 mb-3'>
                            <div className={styles.imageContainer} style={{ backgroundImage: 'url(/assets/metaverse/8.png)' }} />
                            <div className='mb-1'><b>{t('differ2')}</b></div>
                            <p><>{t('community')}</></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.block}>
            <div className='container'>
                <p><Label text={t('business')} /></p>
                <h4><p>{t('learningSpace')}</p></h4>
                <br/>
                <div>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 mb-5'>
                            <div className='d-flex'>
                                <div style={{width: 170}}>
                                    <img
                                        src={TrainingImg} width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{ width: '150px', height: 'auto', marginRight: 20 }}
                                        alt=""/>
                                </div>
                                <div>
                                    <div>
                                        <h5 className='blue-colored-text'>{t('training')}</h5>
                                        <div>{t('bigData')}</div>
                                        <div>{t('propensity')}</div>
                                        <div>{t('topik')}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 mb-5'>
                            <div className='d-flex'>
                                <div style={{width: 170}}>
                                    <img
                                        src={HistoryImg} width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{ width: '150px', height: 'auto', marginRight: 20 }}
                                        alt=""/>
                                </div>
                                <div>
                                    <div>
                                        <h5 className='blue-colored-text'>{t('culture')}</h5>
                                        <div>{t('treasures')}</div>
                                        <div>{t('earnings')}</div>
                                        <div>{t('transactions')}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 mb-5'>
                            <div className='d-flex'>
                                <div style={{width: 170}}>
                                    <img
                                        src={LandImg} width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{ width: '150px', height: 'auto', marginRight: 20 }}
                                        alt=""/>
                                </div>
                                <div>
                                    <div>
                                        <h5 className='blue-colored-text'>{t('digital')}</h5>
                                        <div>{t('gather')}</div>
                                        <div>{t('exchange')}</div>
                                        <div>{t('virtual')}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 mb-5'>
                            <div className='d-flex'>
                                <div style={{width: 170}}>
                                    <img
                                        src={ClockImg} width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{ width: '150px', height: 'auto', marginRight: 20 }}
                                        alt=""/>
                                </div>
                                <div>
                                    <div>
                                        <h5 className='blue-colored-text'>{t('design')}</h5>
                                        <div>{t('activity')}</div>
                                        <div>{t('products')}</div>
                                        <div>{t('sales')} </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6'>
                            <div className='d-flex'>
                                <div style={{width: 170}}>
                                    <img
                                        src={VRImg}
                                        height={0}
                                        width={0}
                                        sizes="100vw"
                                        style={{ width: '150px', height: 'auto', marginRight: 20 }}
                                        alt=""/>
                                </div>
                                <div>
                                    <div>
                                        <h5 className='blue-colored-text'>{t('AR')}</h5>
                                        <div>{t('applyAR')}</div>
                                        <div>{t('effective')}</div>
                                        <div>{t('realistic')}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={`${styles.block} ${styles.yellow}`}>
            <div className='container'>
                <p><Label text={t('differentiation')} /></p>
                <h4><p className='blue-colored-text'>{t('existing')}</p></h4>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">{t('apps')}</th>
                        <th scope="col">{t('NaLat')}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">{t('platform')}</th>
                        <td>{t('2d')}</td>
                        <td>{t('3d')}</td>
                    </tr>
                    <tr>
                        <th scope="row">{t('device')}</th>
                        <td>{t('smartphone')}</td>
                        <td>{t('lowEnd')}</td>
                    </tr>
                    <tr>
                        <th scope="row">{t('learnForm')}</th>
                        <td>{t('standalone')}</td>
                        <td>{t('multiPlay')}</td>
                    </tr>
                    <tr>
                        <th scope="row">{t('learnContent')}</th>
                        <td>{t('workbook')}</td>
                        <td>
                            {t('motivation')}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">{t('compete')}</th>
                        <td>{t('access')}</td>
                        <td>
                            {t('gamification')}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">{t('efficiency')}</th>
                        <td>{t('difficult')}</td>
                        <td>
                            {t('learners')}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}

export default MetaverseIntroduction;
