import {useLocale, useTranslations} from 'next-intl';
import styles from './page.module.scss';

export default function Index() {
  const t = useTranslations('Index');
  const locale = useLocale();

  return <div className={styles.home}>
    <div className={styles.hero}>
      <div className={styles.content}>
        <div className={`text-center ${styles.text}`}>Metaverse for Korean Education</div>
        <div className='text-center'>
          <button className='btn btn-lg custom-btn btn-orange btn-warning'>
            Check now&nbsp;&nbsp;→
          </button>
        </div>
      </div>
    </div>
    <div className='container d-flex justify-content-center align-items-center'>
      <div className={styles.businessSummary}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim, urna eget placerat vehicula, risus ante elementum erat, a efficitur lacus massa ut metus. Aliquam a eros arcu. Pellentesque ut convallis nisi. Nullam eu metus lacus. Fusce suscipit neque quis ultricies iaculis. Mauris vestibulum ante porta, porttitor magna vitae, eleifend lectus. Aenean ex ante, consequat in turpis sit amet, eleifend aliquet erat. Sed porttitor maximus sollicitudin. Mauris ac gravida metus, eleifend lacinia lacus. Vestibulum vitae velit feugiat, viverra risus vel, fermentum libero. Proin rhoncus egestas rutrum. Mauris commodo vel felis eget dignissim. Donec facilisis nunc justo, a suscipit purus sagittis quis. Phasellus faucibus sapien vitae varius posuere. Proin condimentum lectus in leo scelerisque varius.

        Suspendisse id varius eros, vel vulputate dolor. Morbi velit erat, vulputate egestas mi a, sodales laoreet arcu. Nulla porttitor mauris eu ante imperdiet, vel luctus lectus placerat. Vivamus non tempor leo. Cras eu lorem et tellus dapibus luctus sit amet non lectus. Donec mollis a eros sit amet interdum. Mauris elementum vulputate varius. Aliquam erat volutpat. Suspendisse accumsan turpis quis odio ornare lacinia. Quisque facilisis velit et ornare bibendum. Cras posuere varius felis eu mollis. Donec vitae nisl nec ex rutrum convallis at a arcu. Vestibulum pretium accumsan auctor. Donec tellus mi, lacinia eu maximus at, venenatis sed ipsum.
      </div>
    </div>
  </div>;
}
