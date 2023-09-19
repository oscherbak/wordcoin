import {useLocale, useTranslations} from "next-intl";
import styles from "./styles.module.scss";
import Image from "next/image";
import PartnersImg from "./assets/partners.png";

const Partners = () => {
    const locale = useLocale();
    const t = useTranslations('Partners');

    return <div className={`${styles.partners} container custom-page-container`}>
        <h2>
            Partners
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
                        <div><b>Korean</b></div>
                    </div>
                </div>
                <div className={styles.line} />
                <p><b>Korea Cultural Information Service (KCISA)</b></p>
                <p><b>College of English Cyber University K-STUDY Center</b></p>
                <p><b>Yeoju University Sejong Institute</b></p>
                <p><b>Kyung Hee Cyber University Global Korean Studies Institute</b></p>
                <p><b>Korea Cultural Heritage Research Center</b></p>
            </div>
            <div className='col-lg-4 col-md-4 mb-5'>
                <div className='d-flex mb-3'>
                    <div>
                        <div className={styles.circle}>
                            <div className={styles.internalCircle} />
                        </div>
                    </div>
                    <div className={`d-flex align-items-center ${styles.textBlue}`}>
                        <div><b>Foreign</b></div>
                    </div>
                </div>
                <div className={styles.line} />
                <p><b>Thang Long University of Vietnam</b></p>
                <p><b>Korean Cultural Center in Dhaka, Bangladesh</b></p>
            </div>
            <div className='col-lg-4 col-md-4 mb-5'>
                <div className='d-flex mb-3'>
                    <div>
                        <div className={styles.circle}>
                            <div className={styles.internalCircle} />
                        </div>
                    </div>
                    <div className={`d-flex align-items-center ${styles.textBlue}`}>
                        <div><b>Educational Advisory</b></div>
                    </div>
                </div>
                <div className={styles.line} />
                <p><b>Professor Kim Ji-hyung (former president of the Bilingual Society)</b></p>
                <p><b>Professor Kim Jin-hae (Kyung Hee University)</b></p>
                <p><b>Professor Ahn Sung-beom (Kyung Hee University)</b></p>
                <p><b>Professor Lee Min-woo (Korea University of Foreign Studies)</b></p>
                <p><b>Professor Park Hyun-mo (Yeoju University)</b></p>
            </div>
        </div>
    </div>
}

export default Partners;
