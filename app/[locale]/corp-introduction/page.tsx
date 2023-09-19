import {useLocale, useTranslations} from "next-intl";
import Image from 'next/image';
import styles from './styles.module.scss';
import Label from '../components/label/label';
import ChartImg from "../business-background/assets/chart.png";
import GameImg from './assets/games.png';
import Game2Img from './assets/games2.png';
import Game3Img from './assets/games3.png';
import PhotoImg from './assets/photo.png';

const CorpIntroduction = () => {
    const locale = useLocale();
    const t = useTranslations('CorpIntroduction');

    return <div className={`${styles.corpIntroduction} container custom-page-container`}>
        <h2>
            Develop Educational Software with Gamification Technology.
        </h2>
        <br />
        <br />
        <p><Label text='Global' /></p>
        <h5 className='blue-colored-text'><p>The Necessity for Korean Language Education for Foreigners due to increase of Korean Wave Fans</p></h5>
        <br />
        <br />
        <div className='row'>
            <div className='col-lg-3 col-md-6 mb-5'>
                <div className={`${styles.circle} mb-4`}>2019</div>
                <div className='mb-2'>
                    <Image
                        src={GameImg}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                     alt=""/>
                </div>
                <p>Developed History Education Board Game “Sejong” </p>
                <p>Developed Raon Hanjul Education</p>
                <p className='blue-colored-text'>Awarded Minister of Culture, Sports and Tourism Award</p>
                <p>Game of the Month in the second half of 2019</p>
                <p>
                    Functional game category. [Board game Sejong]
                </p>
            </div>
            <div className='col-lg-3 col-md-6 mb-5'>
                <div className={`${styles.circle} mb-4`}>2020</div>
                <div className='mb-2'>
                    <Image
                        src={Game3Img}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                     alt=""/>
                </div>
                <p>Duty training for customs officials</p>
                <p>Development of the standard of
                    item classification and item classification argument</p>
                <p>Customs and Border Management Training Institute</p>
                <p className='blue-colored-text'>2020 Director of Human
                    Resources Innovation Award Awarded
                </p>
            </div>
            <div className='col-lg-3 col-md-6 mb-5'>
                <div className={`${styles.circle} mb-4`}>2021</div>
                <div className='mb-2'>
                    <Image
                        src={Game2Img}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                     alt=""/>
                </div>
                <p>Development of complete conquest
                    of job training items for customs officials
                </p>

                <p>Korea Customs Human Resources
                    Development Institute
                </p>
                <p className='blue-colored-text'>
                    Awarded the 2022 Human
                    Resources Innovation Awards
                </p>
            </div>
            <div className='col-lg-3 col-md-6 mb-5'>
                <div className={`${styles.circle} mb-4`}>2022</div>
                <div className='mb-2'>
                    <Image
                        src={GameImg}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                     alt=""/>
                </div>
                <p>Metaverse, Korean language education for foreigners</p>
                <p>Metamento development
                </p>
                <p className='blue-colored-text'>
                    Received the Korea Cultural Information Center Director Award
                </p>
                <p>
                    2022 Cultural Data Utilization Contest
                </p>
                <p>
                    Product Service Division [Metamento]
                </p>
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        <div className='row'>
            <div className='col-lg-6 mb-5'>
                <h1 className='blue-colored-text'>Team</h1>
                <div className='row'>
                    <div className='col-6'>
                        <Image
                            src={PhotoImg}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}
                         alt=""/>
                    </div>
                    <div className='col-6'>
                        <h2>CEO Lee Don Gun</h2>
                        <ul>
                            <li>Kyung Hee University Bachelor of KoreanLanguage and Literature</li>
                            <li>Gamification / Edutech Specialist</li>
                            <li>21 years of development experience / -23 years of commercialization</li>
                            <li>Awarded the Chief Engineer&apos;s Award</li>
                            <li>2 cases of patent registration</li>
                            <li>Institutional Education / Game Business 12</li>
                            <li>More than 100 lecture light broadcasts</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-lg-6'>
                <h2 className='blue-colored-text'>teamwork</h2>
                <div style={{height: 8, backgroundColor: '#08b8f1', marginBottom: 15}} />
                <div className='row'>
                    <div className='col-6'>
                        <h3>CPO Choi In Woo</h3>
                        <ul>
                            <li>25 years of experience</li>
                            <li>Director of Development at
                                CJ Internet Games</li>
                            <li>CEO of Ribbon Games (Netmarble)
                                </li>
                            <li>Funple CTO
                                </li>
                            <li>Nellbiz Games CTO
                                </li>
                            <li>Digital Forest CTO</li>
                        </ul>
                    </div>
                    <div className='col-6'>
                        <h4>Lee Yoseph, Program team leader</h4>
                        <div className={styles.secondaryText}>3 years of experience (CJ Edu, etc.)</div>
                        <div className={styles.tinyText}>Client / Server / Engine</div>
                        <br/>
                        <h4>Ahn Dong Bong, Graphics Team Leader </h4>
                        <div className={styles.secondaryText}>14 years of experience (Netmarble, etc.)
                        </div>
                        <div className={styles.tinyText}>2D / 3D / Animation / Effect
                        </div>
                        <br/>
                        <h4>Kim Ji Woon, Arts Team Leader</h4>
                        <div className={styles.secondaryText}>14 years of experience (Gamevil, etc.)</div>
                        <div className={styles.tinyText}>Won / UI-UX / TA
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default CorpIntroduction;
