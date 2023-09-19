import {useLocale, useTranslations} from "next-intl";
import Image from 'next/image';
import styles from './styles.module.scss';
import Label from '../../components/label/label';
import StreetsImg from './assets/streets.png';
import CityImg from './assets/city.png';
import TrainingImg from './assets/training.png';
import ClockImg from './assets/clock.png';
import LandImg from './assets/land.png';
import VRImg from './assets/vr.png';
import HistoryImg from './assets/history.png';

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
         alt=""/>
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
         alt=""/>
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
        <br/>
        <br/>
        <br/>
        <p><Label text='Business plan' /></p>
        <h4><p>Learning space with various situations, conditions, and functions</p></h4>
        <br/>
        <div>
            <div className='row'>
                <div className='col-lg-6 col-md-6 mb-5'>
                    <div className='d-flex'>
                        <div style={{width: 170}}>
                            <Image
                                src={TrainingImg} width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '150px', height: 'auto', marginRight: 20 }}
                             alt=""/>
                        </div>
                        <div>
                            <div>
                                <h5 className='blue-colored-text'>Personalization Training Service</h5>
                                <div>- Big Data and Personal Learning Data Analysis</div>
                                <div>- Providing content tailored to learning objectives and learning propensity</div>
                                <div>- TOPIK (Korean language education test for foreigners) education by level</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col-md-6 mb-5'>
                    <div className='d-flex'>
                        <div style={{width: 170}}>
                            <Image
                                src={HistoryImg} width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '150px', height: 'auto', marginRight: 20 }}
                             alt=""/>
                        </div>
                        <div>
                            <div>
                                <h5 className='blue-colored-text'>Korean Cultural Items</h5>
                                <div>- 350 national treasures, 2,293 treasures, 470 natural monuments, etc</div>
                                <div>- Earned as learning outcomes and competition rewards in the metaverse</div>
                                <div>- User-to-user transactions / Combined with NFT</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col-md-6 mb-5'>
                    <div className='d-flex'>
                        <div style={{width: 170}}>
                            <Image
                                src={LandImg} width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '150px', height: 'auto', marginRight: 20 }}
                             alt=""/>
                        </div>
                        <div>
                            <div>
                                <h5 className='blue-colored-text'>Korean Digital Club</h5>
                                <div>- A place where Korean fans from all over the world gather to learn about Korea</div>
                                <div>- Exchange of information on Korean language and culture</div>
                                <div>- A virtual Korea where you can experience visiting Korea</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col-md-6 mb-5'>
                    <div className='d-flex'>
                        <div style={{width: 170}}>
                            <Image
                                src={ClockImg} width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '150px', height: 'auto', marginRight: 20 }}
                             alt=""/>
                        </div>
                        <div>
                            <div>
                                <h5 className='blue-colored-text'>Korean Design Products</h5>
                                <div>- Interworking with real user activity and the metaverse world</div>
                                <div>- Interworking between items in the metaverse and real products</div>
                                <div>- Promotion and sales of Korean design products</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col-md-6 mb-5'>
                    <div className='d-flex'>
                        <div style={{width: 170}}>
                            <Image
                                src={VRImg}
                                sizes="100vw"
                                style={{ width: '150px', height: 'auto', marginRight: 20 }}
                             alt=""/>
                        </div>
                        <div>
                            <div>
                                <h5 className='blue-colored-text'>Strengthening VR and AR contents</h5>
                                <div>- Applying Virtual and Augmented Reality Technology to the Korean Educational Metaverse</div>
                                <div>- Enhance educational effectiveness and content fun</div>
                                <div>- Experience Korea&apos;s K-World in a virtual space more realistically</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        <p><Label text='Differentiation' /></p>
        <h4><p className='blue-colored-text'>Differentiation from existing Korean education applications</p></h4>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col" className="table-secondary">Existing Korean Education Application</th>
                    <th scope="col" className="table-warning">Na Lat Mal Ssa Mi</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Platform</th>
                    <td className="table-secondary">2D-based learning application</td>
                    <td className="table-warning">FULL 3D Based Metaverse Platform</td>
                </tr>
                <tr>
                    <th scope="row">Device Accessibility</th>
                    <td className="table-secondary">Smartphone only</td>
                    <td className="table-warning">Supports both low-end PCs and smartphones (using the same account)</td>
                </tr>
                <tr>
                    <th scope="row">Learning Form based on the Platform</th>
                    <td className="table-secondary">Stand-alone play, learning by self.</td>
                    <td className="table-warning">Online Multi-Play, Learn with all users around the world</td>
                </tr>
                <tr>
                    <th scope="row">Learning Content</th>
                    <td className="table-secondary">The existing workbook + lecture video is transferred to the smartphone. Too simple contents that does not meet the favor of current MZ generation who enjoys the Korean Wave</td>
                    <td className="table-warning">
                        Create learning motivation continuously with a variety of content. Story progress,
                        educational mini-game, magic word book and consonant collection, avatar and personal space decoration, etc
                    </td>
                </tr>
                <tr>
                    <th scope="row">Competitiveness</th>
                    <td className="table-secondary">Accessibility through Smartphones </td>
                    <td className="table-warning">
                        High educational fun and educational effectiveness through gamification
                    </td>
                </tr>
                <tr>
                    <th scope="row">Efficiency</th>
                    <td className="table-secondary">It is difficult for learners to continuously use it due to repeated learning patterns. Difficult to have a diverse sales structure </td>
                    <td className="table-warning">
                        Motivate learning continuously through fun factors such as community among learners of the same language (cultural region), various collection activities, and learning rewards, and secure various forms of sales structure
                    </td>
                </tr>

            </tbody>
        </table>
    </div>
}

export default MetaverseIntroduction;
