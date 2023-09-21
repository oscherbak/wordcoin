import {useLocale, useTranslations} from "next-intl";
import Image from 'next/image';
import styles from './styles.module.scss';
import Label from '../../../components/label/label';
import ChartImg from "./assets/chart.png";

const BusinessBackground = () => {
    const t = useTranslations('BusinessBackground');

    return <div id='business-background' className={`${styles.businessBackground} container custom-page-container`}>
        <h2 className='page-headline'>
            {t('header')}
        </h2>
        <br />
        <p><Label text={t('global')} /></p>
        <h4 className='blue-colored-text'><p>{t('necessity')}</p></h4>
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
                <h5><p>{t('places')}</p></h5>
                <div className='row'>
                    <div className='col-6'>
                        <h5 className={styles.redTitle}>{t('drama.title')}</h5>
                        <ol>
                            <li>{t('drama.text')}</li>
                            <li>{t('drama.text2')}</li>
                        </ol>
                    </div>
                    <div className='col-6'>
                        <h5 className={styles.redTitle}>{t('movie.title')}</h5>
                        <ol>
                            <li>{t('movie.text')}</li>
                            <li>{t('movie.text2')}</li>
                        </ol>
                    </div>
                    <div className='col-6'>
                        <h5 className={styles.redTitle}>{t('music.title')}</h5>
                        <ol>
                            <li>{t('music.text')}</li>
                            <li>{t('music.text2')}</li>
                        </ol>
                    </div>
                    <div className='col-6'>
                        <h5 className={styles.redTitle}>{t('entertainment.title')}</h5>
                        <ol>
                            <li>{t('entertainment.text')}</li>
                            <li>{t('entertainment.text2')}</li>
                        </ol>
                    </div>
                    <div className='col-6'>
                        <h5 className={styles.redTitle}>{t('cartoons.title')}</h5>
                        <ol>
                            <li>{t('cartoons.text')}</li>
                            <li>{t('cartoons.text2')}</li>
                        </ol>
                    </div>
                    <div className='col-6'>
                        <h5 className={styles.redTitle}>{t('books.title')}</h5>
                        <ol>
                            <li>{t('books.text')}</li>
                            <li>{t('books.text2')}</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <br />
        <br />
        <br />
        <p><Label text={t('ministry')} /></p>
        <h4 className='blue-colored-text'><p>{t('government')}</p></h4>
        <p>{t('sejong')}</p>
        <div className='row'>
            <div className='col-lg-6 col-md-6 mb-5'>
                <div className={`${styles.expanstionBlock} ${styles.block1} mb-2`} />
                <p>{t('status')}</p>

                <div>{t('budget')}</div>
                <div>{t('education')}</div>
            </div>
            <div className='col-lg-6 col-md-6 mb-5'>
                <div className={`${styles.expanstionBlock} ${styles.block2}`} />
            </div>
        </div>
    </div>
}

export default BusinessBackground;
