import {useLocale, useTranslations} from 'next-intl';
import styles from './page.module.scss';
import Link from "next/link";

const Index = () => {
  const t = useTranslations('Index');

  return <div className={styles.home}>
    <div className={styles.hero}>
      <div className={styles.content}>
        <div className={`text-center ${styles.text}`}>{t('header')}</div>
        <div className='text-center'>
          <Link href='/metaverse-introduction' className='btn btn-lg custom-btn btn-orange btn-warning'>
            {t('CTAText')}&nbsp;&nbsp;→
          </Link>
        </div>
      </div>
    </div>
    <div className='container d-flex justify-content-center align-items-center'>
      <div className={styles.businessSummary}>
        {t('bodyText')}
      </div>
    </div>
  </div>;
}

export default Index;
