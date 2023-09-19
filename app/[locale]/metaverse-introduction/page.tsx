import {useLocale, useTranslations} from "next-intl";
import Image from 'next/image';
import styles from './styles.module.scss';
import Label from '../components/label/label';
import StreetsImg from './assets/streets.png';
import CityImg from './assets/city.png';

const MetaverseIntroduction = () => {
    const locale = useLocale();
    const t = useTranslations('MetaverseIntroduction');

    return <div className={`${styles.metaverseIntroduction} container custom-page-container`}>
        <h2>
            Metaverse Introduction
        </h2>
        <br />
        <br />
        <p><Label text='Core services' /></p>
        <h4 className='blue-colored-text'>Korean Life Experience Through Metaverse</h4>
        <p><b>Learn culture of Korea at famous places</b></p>
        <Image
           src={StreetsImg} width={0}
           height={0}
           sizes="100vw"
           style={{ width: '100%', height: 'auto' }}
        />
        <br/>
        <br/>
        <br/>
        <p><Label text='Service Features' /></p>
        <h4 className='blue-colored-text'>A dictionary like Metaverse which is filled with essential vocabulary</h4>
        <p><b>9 parts, 10,000 words, 1 to 6 steps</b></p>
        <Image
            src={CityImg} width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
        />
        <br/>
        <br/>
        <br/>
        <p><Label text='Scalability' /></p>
        <h4 className='blue-colored-text'><p>Learning space with various situations, conditions, and functions</p></h4>
        <div>
            <div className='row'>
                <div className='col-lg-3 col-md-6 mb-3'>
                    <div className={styles.imageContainer} style={{ backgroundImage: 'url(/assets/metaverse/1.png)' }} />
                    <div className='mb-1'><b>Actual Space(internal/external)</b></div>
                    <p className='blue-colored-text'><b>#Kyung Hee University Main Building</b></p>
                </div>
                <div className='col-lg-3 col-md-6 mb-3'>
                    <div className={styles.imageContainer} style={{ backgroundImage: 'url(/assets/metaverse/2.png)' }} />
                    <div className='mb-1'><b>Untact Educating Space</b></div>
                    <p className='blue-colored-text'><b>#An online classroom</b></p>
                </div>
                <div className='col-lg-3 col-md-6 mb-3'>
                    <div className={styles.imageContainer} style={{ backgroundImage: 'url(/assets/metaverse/3.png)' }} />
                    <div className='mb-1'><b>Special Purpose Education Space</b></div>
                    <p className='blue-colored-text'><b>#Factory Workshop</b></p>
                </div>
                <div className='col-lg-3 col-md-6 mb-3'>
                    <div className={styles.imageContainer} style={{ backgroundImage: 'url(/assets/metaverse/4.png)' }} />
                    <div className='mb-1'><b>Living/Situational education space</b></div>
                    <p className='blue-colored-text'><b>#Hospital</b></p>
                </div>
            </div>
        </div>
        <br/>
        <p><Label text='Contents' /></p>
        <h4 className='blue-colored-text'><p>Variety of metaverse content</p></h4>
        <div>
            <div className='row'>
                <div className='col-lg-3 col-md-6 mb-3'>
                    <div className={styles.imageContainer} style={{ backgroundImage: 'url(/assets/metaverse/5.png)' }} />
                    <div className='mb-1'><b>Story</b></div>
                    <p><>(Narrative Structure Quest)</></p>
                </div>
                <div className='col-lg-3 col-md-6 mb-3'>
                    <div className={styles.imageContainer} style={{ backgroundImage: 'url(/assets/metaverse/6.png)' }} />
                    <div className='mb-1'><b>Fun</b></div>
                    <p><>(Collectable Contents)</></p>
                </div>
                <div className='col-lg-3 col-md-6 mb-3'>
                    <div className={styles.imageContainer} style={{ backgroundImage: 'url(/assets/metaverse/7.png)' }} />
                    <div className='mb-1'><b>Differentiation I</b></div>
                    <p><>(Mini Games)</></p>
                </div>
                <div className='col-lg-3 col-md-6 mb-3'>
                    <div className={styles.imageContainer} style={{ backgroundImage: 'url(/assets/metaverse/8.png)' }} />
                    <div className='mb-1'><b>Differentiation II</b></div>
                    <p><>(Communities)</></p>
                </div>
            </div>
        </div>
    </div>
}

export default MetaverseIntroduction;
