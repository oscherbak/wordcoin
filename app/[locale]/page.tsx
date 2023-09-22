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
    <header className="masthead">
      <div className="container">
        <div className="masthead-heading">{t('header')}</div>
        <div className="masthead-subheading">{t('subheader')}</div>
        <a className="btn btn-primary btn-xl text-uppercase" href={getFilePath()} target='_blank'>{t('CTAText')}</a>
      </div>
    </header>
    <div className='white-bg'>
      <MetaverseIntroduction />
    </div>
    <div className='grey-bg'>
      <BusinessBackground />
    </div>
    <div className='white-bg'>
      <CorpIntroduction />
    </div>
    <div className='grey-bg'>
      <Roadmap />
    </div>
    <div className='white-bg'>
      <CoinDistribution/>
    </div>
    <div className='grey-bg'>
      <Partners />
    </div>
  </div>;
}

export default Index;
