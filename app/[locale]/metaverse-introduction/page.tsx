import {useTranslations} from "next-intl";
import Image from 'next/image';
import styles from './styles.module.scss';
import Label from '../../components/label/label';
import StreetsImg from './assets/streets.png';
import CityImg from './assets/city.png';
import TrainingImg from './assets/training.png';
import ClockImg from './assets/clock.png';
import LandImg from './assets/land.png';
import VRImg from './assets/vr.png';
import HistoryImg from './assets/history.png';

const MetaverseIntroduction = () => {
    const t = useTranslations('MetaverseIntroduction');

    return <div className={`${styles.metaverseIntroduction} container custom-page-container`}>
        <h2>
            {t('header')}
        </h2>
        <br />
        <br />
        <p><Label text={t('core')} /></p>
        <h4 className='blue-colored-text'>{t('subheader')}</h4>
        <p><b>{t('learnPlaces')}</b></p>
        <Image
           src={StreetsImg} width={0}
           height={0}
           sizes="100vw"
           style={{ width: '100%', height: 'auto' }}
         alt=""/>
        <br/>
        <br/>
        <br/>
        <p><Label text={t('service')} /></p>
        <h4 className='blue-colored-text'>{t('vocabulary')}</h4>
        <p><b>{t('parts')}</b></p>
        <Image
            src={CityImg} width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
         alt=""/>
        <br/>
        <br/>
        <br/>
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
        <br/>
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
        <br/>
        <br/>
        <br/>
        <p><Label text={t('business')} /></p>
        <h4><p>{t('learningSpace')}</p></h4>
        <br/>
        <div>
            <div className='row'>
                <div className='col-lg-6 col-md-6 mb-5'>
                    <div className='d-flex'>
                        <div style={{width: 170}}>
                            <Image
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
                            <Image
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
                            <Image
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
                            <Image
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
                <div className='col-lg-6 col-md-6 mb-5'>
                    <div className='d-flex'>
                        <div style={{width: 170}}>
                            <Image
                                src={VRImg}
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
        <br/>
        <br/>
        <br/>
        <p><Label text={t('differentiation')} /></p>
        <h4><p className='blue-colored-text'>{t('existing')}</p></h4>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col" className="table-secondary">{t('apps')}</th>
                    <th scope="col" className="table-warning">{t('NaLat')}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">{t('platform')}</th>
                    <td className="table-secondary">{t('2d')}</td>
                    <td className="table-warning">{t('3d')}</td>
                </tr>
                <tr>
                    <th scope="row">{t('device')}</th>
                    <td className="table-secondary">{t('smartphone')}</td>
                    <td className="table-warning">{t('lowEnd')}</td>
                </tr>
                <tr>
                    <th scope="row">{t('learnForm')}</th>
                    <td className="table-secondary">{t('standalone')}</td>
                    <td className="table-warning">{t('multiPlay')}</td>
                </tr>
                <tr>
                    <th scope="row">{t('learnContent')}</th>
                    <td className="table-secondary">{t('workbook')}</td>
                    <td className="table-warning">
                        {t('motivation')}
                    </td>
                </tr>
                <tr>
                    <th scope="row">{t('compete')}</th>
                    <td className="table-secondary">{t('access')}</td>
                    <td className="table-warning">
                        {t('gamification')}
                    </td>
                </tr>
                <tr>
                    <th scope="row">{t('efficiency')}</th>
                    <td className="table-secondary">{t('difficult')}</td>
                    <td className="table-warning">
                        {t('learners')}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
}

export default MetaverseIntroduction;
