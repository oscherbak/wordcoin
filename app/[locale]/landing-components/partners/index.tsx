import {useLocale, useTranslations} from "next-intl";
import styles from "./styles.module.scss";
import Image from "next/image";
import PartnersImg from "./assets/partners.png";

const Partners = () => {
    const t = useTranslations('Partners');

    return <div id='partners' className={`${styles.partners} container custom-page-container`}>
        <h2>
            {t('header')}
        </h2>
        <br/>
        <br/>
        <div className='mb-5'>
            <Image
                src={PartnersImg}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                alt=""/>
        </div>
        <div className='row'>
            <div className='col-lg-4 col-md-4 mb-5'>
                <div className='d-flex mb-3'>
                    <div>
                        <div className={styles.circle}>
                            <div className={styles.internalCircle} />
                        </div>
                    </div>
                    <div className={`d-flex align-items-center ${styles.textBlue}`}>
                        <div><b>{t('korean')}</b></div>
                    </div>
                </div>
                <div className={styles.line} />
                <p><b>{t('KCISA')}</b></p>
                <p><b>{t('college')}</b></p>
                <p><b>{t('sejong')}</b></p>
                <p><b>{t('cyber')}</b></p>
                <p><b>{t('heritage')}</b></p>
            </div>
            <div className='col-lg-4 col-md-4 mb-5'>
                <div className='d-flex mb-3'>
                    <div>
                        <div className={styles.circle}>
                            <div className={styles.internalCircle} />
                        </div>
                    </div>
                    <div className={`d-flex align-items-center ${styles.textBlue}`}>
                        <div><b>{t('foreign')}</b></div>
                    </div>
                </div>
                <div className={styles.line} />
                <p><b>{t('vietnam')}</b></p>
                <p><b>{t('dhaka')}</b></p>
            </div>
            <div className='col-lg-4 col-md-4 mb-5'>
                <div className='d-flex mb-3'>
                    <div>
                        <div className={styles.circle}>
                            <div className={styles.internalCircle} />
                        </div>
                    </div>
                    <div className={`d-flex align-items-center ${styles.textBlue}`}>
                        <div><b>{t('advisory')}</b></div>
                    </div>
                </div>
                <div className={styles.line} />
                <p><b>{t('person1')}</b></p>
                <p><b>{t('person2')}</b></p>
                <p><b>{t('person3')}</b></p>
                <p><b>{t('person4')}</b></p>
                <p><b>{t('person5')}</b></p>
            </div>
        </div>
    </div>
}

export default Partners;
