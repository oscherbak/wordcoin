import {useLocale, useTranslations} from 'next-intl';
import styles from './page.module.scss';
import BusinessBackground from "./homepage-components/business-background";
import MetaverseIntroduction from "./homepage-components/metaverse-introduction";
import CorpIntroduction from "./homepage-components/corp-introduction";
import Roadmap from "./homepage-components/roadmap";
import CoinDistribution from "./homepage-components/coin-distribution";
import Partners from "./homepage-components/partners";

const Index = () => {
  const locale = useLocale();
  const t = useTranslations('Index');

  const getFilePath = () => {
    let path = '/files/WordCoin_WhitePaper_EN.pdf';

    if (locale === 'kr') {
      return '/files/WordCoin_WhitePaper_KO.pdf'
    }

    return path;
  }

  return <div className={styles.home}>
    <div className={styles.hero}>
      <div className={styles.content}>
        <div className={`text-center ${styles.text}`}>{t('header')}</div>
        <div className='text-center'>
          <a href={getFilePath()} target='_blank' className={`btn btn-lg custom-btn btn-orange btn-warning ${styles.ctaBtn}`}>
            {t('CTAText')}&nbsp;&nbsp;&nbsp;
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 16.0001C1.45 16.0001 0.979333 15.8045 0.588 15.4131C0.196 15.0211 0 14.5501 0 14.0001V11.0001H2V14.0001H14V11.0001H16V14.0001C16 14.5501 15.8043 15.0211 15.413 15.4131C15.021 15.8045 14.55 16.0001 14 16.0001H2ZM8 12.0001L3 7.00012L4.4 5.55012L7 8.15012V0.00012207H9V8.15012L11.6 5.55012L13 7.00012L8 12.0001Z" fill="black"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div className='container d-flex justify-content-center align-items-center'>
    </div>
    <MetaverseIntroduction />
    <div className='grey-bg'>
      <BusinessBackground />
    </div>
    <CorpIntroduction />
    <div className='grey-bg'>
      <Roadmap />
    </div>
    <CoinDistribution/>
    <div className='grey-bg'>
      <Partners />
    </div>
  </div>;
}

export default Index;
