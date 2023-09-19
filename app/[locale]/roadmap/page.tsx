import {useLocale, useTranslations} from "next-intl";
import styles from './styles.module.scss';

const Roadmap = () => {
    const locale = useLocale();
    const t = useTranslations('Roadmap');

    return <div className={`${styles.roadmap} container custom-page-container`}>
        <h2>
            Roadmap
        </h2>
        <br/>
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
                        <div><b>PHASE 1</b></div>
                        <div>Closed beta-test</div>
                    </div>
                </div>
                <div>
                    <div><b>Domestic</b></div>
                    <ul>
                        <li>With Kyung Hee Cyber University Korean Language and Culture Department and Korean Language Department Professors and Students</li>
                        <li>With professors and students of the Department of Korean Language at Cyber Hankuk University of Foreign Studies</li>
                    </ul>
                    <div><b>International</b></div>
                    <ul>
                        <li>With professors and students from 17 overseas universities participating in KF Global e-School Korean Language Education Project</li>
                        <li>With school teachers and students belonging to the Korean Language School Council of the Overseas Koreans Foundation</li>
                        <li>With Professors and students of the Department of Korean Language at Tanglong University in Vietnam</li>
                        <li>With Korean Cultural Center in Dakhan, Bangladesh</li>
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
                        <div><b>PHASE 2</b></div>
                        <div>Launch of services for individuals (global) and domestic and international institutions</div>
                    </div>
                </div>
                <div>
                    <div><b>Individual</b></div>
                    <div>
                        <ul>
                            <li>Android and Ios versions global</li>
                            <li>(FREE DOWNLOAD FROM APPL STORE) ORGANIZATIONS</li>
                        </ul>
                    </div>
                    <div><b>Institution</b></div>
                    <div>
                        <ul>
                            <li>Use as an online textbook</li>
                            <li>Subscription services by student account</li>
                            <li>A semesters&apos; contract</li>
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
                        <div><b>PHASE 3</b></div>
                        <div>Expansion of services for overseas educational institutions</div>
                    </div>
                </div>
                <div>
                    <div>
                        <ul>
                            <li>Launch of sequential subscription services based on overseas institutions and universities secured through advisory bodies and faculty members</li>
                            <li>Of the 1,408 universities in 107 countries operating Korean language/Korean studies courses, 18 universities participating in the KF Global e-School Korean Language Education Project (Korea Foundation)</li>
                            <li>Out of 1,900 schools in 118 countries (estimated by 100,000 students), the overseas Korean school council&apos;s affiliated school</li>
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
                        <div><b>PHASE 4</b></div>
                        <div>Expansion of overseas educational institutions and participation in projects of domestic public institutions</div>
                    </div>
                </div>
                <div>
                    <div>
                        <ul>
                            <li>Start subscription-type services based on overseas universities secured through advisory institutions and faculty members</li>
                            <li>22 universities out of 1408 universities in 107 countries running Korean language/Korean studies courses sequentially</li>
                            <li>Participation in Korean language / Korean culture education projects for foreigners</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Roadmap;
