import {useLocale, useTranslations} from 'next-intl';
import styles from './page.module.scss';
import Link from "next/link";
import BusinessBackground from "./homepage-components/business-background";
import MetaverseIntroduction from "./homepage-components/metaverse-introduction";
import CorpIntroduction from "./homepage-components/corp-introduction";
import Roadmap from "./homepage-components/roadmap";
import CoinDistribution from "./homepage-components/coin-distribution";
import Partners from "./homepage-components/partners";

const Index = () => {
  const t = useTranslations('Index');

  return <div className={styles.home}>
    <div className={styles.hero}>
      <div className={styles.content}>
        <div className={`text-center ${styles.text}`}>{t('header')}</div>
        <div className='text-center'>
          <a href='#metaverse-introduction' className={`btn btn-lg custom-btn btn-orange btn-warning ${styles.ctaBtn}`}>
            {t('CTAText')}&nbsp;&nbsp;→
          </a>
        </div>
      </div>
    </div>
    <div className='container d-flex justify-content-center align-items-center'>
      {/*<div className={styles.businessSummary}>*/}
      {/*  {t('bodyText')}*/}
      {/*</div>*/}
    </div>
    <MetaverseIntroduction />
    <BusinessBackground />
    <CorpIntroduction />
    <Roadmap />
    <CoinDistribution/>
    <Partners />
  </div>;
}

export default Index;
