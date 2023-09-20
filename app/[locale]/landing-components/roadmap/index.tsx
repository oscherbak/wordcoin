import {useTranslations} from "next-intl";
import styles from './styles.module.scss';

const Roadmap = () => {
    const t = useTranslations('Roadmap');

    return <div id='roadmap' className={`${styles.roadmap} container custom-page-container`}>
        <h2>
            {t('header')}
        </h2>
        <br/>
        <div className='row'>
            <div className='col-lg-6 col-md-6 mb-5'>
                <div className='d-flex mb-3'>
                    <div>
                        <div className={`${styles.circle} ${styles.blue}`}>
                            <div className={styles.internalCircle} />
                        </div>
                    </div>
                    <div className={styles.textBlue}>
                        <div><b>{t('phase1')}</b></div>
                        <div>{t('beta')}</div>
                    </div>
                </div>
                <div>
                    <div><b>{t('domestic')}</b></div>
                    <ul>
                        <li>{t('cyber')}</li>
                        <li>{t('hankuk')}</li>
                    </ul>
                    <div><b>{t('international')}</b></div>
                    <ul>
                        <li>{t('eSchool')}</li>
                        <li>{t('overseas')}</li>
                        <li>{t('tanglong')}</li>
                        <li>{t('dakhan')}</li>
                    </ul>
                </div>
            </div>
            <div className='col-lg-6 col-md-6 mb-5'>
                <div className='d-flex mb-3'>
                    <div>
                        <div className={`${styles.circle} ${styles.green}`}>
                            <div className={styles.internalCircle} />
                        </div>
                    </div>
                    <div className={styles.textGreen}>
                        <div><b>{t('phase2')}</b></div>
                        <div>{t('services')}</div>
                    </div>
                </div>
                <div>
                    <div><b>{t('individual')}</b></div>
                    <div>
                        <ul>
                            <li>{t('mobile')}</li>
                            <li>{t('download')}</li>
                        </ul>
                    </div>
                    <div><b>{t('institution')}</b></div>
                    <div>
                        <ul>
                            <li>{t('textbook')}</li>
                            <li>{t('subscribtion')}</li>
                            <li>{t('semester')}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 col-md-6 mb-5'>
                <div className='d-flex mb-3'>
                    <div>
                        <div className={`${styles.circle} ${styles.orange}`}>
                            <div className={styles.internalCircle} />
                        </div>
                    </div>
                    <div className={styles.textOrange}>
                        <div><b>{t('phase3')}</b></div>
                        <div>{t('expansion')}</div>
                    </div>
                </div>
                <div>
                    <div>
                        <ul>
                            <li>{t('sequential')}</li>
                            <li>{t('KFGlobal')}</li>
                            <li>{t('affiliated')}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 col-md-6 mb-5'>
                <div className='d-flex mb-3'>
                    <div>
                        <div className={`${styles.circle} ${styles.red}`}>
                            <div className={styles.internalCircle} />
                        </div>
                    </div>
                    <div className={styles.textRed}>
                        <div><b>{t('phase4')}</b></div>
                        <div>{t('participation')}</div>
                    </div>
                </div>
                <div>
                    <div>
                        <ul>
                            <li>{t('faculty')}</li>
                            <li>{t('courses')}</li>
                            <li>{t('education')}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Roadmap;
