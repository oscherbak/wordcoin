"use client";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useTranslations, useMessages, useLocale} from "next-intl";
import Image from 'next/image';
import WordCoinLogoImg from '../../assets/WordCoinLogo.png';
import WordCoinLogoKoreanImg from '../../assets/WordCoinLogoKor.png';
import UsaImg from './assets/usa.png';
import KoreaImg from './assets/korea.png';
import styles from './navigation.module.scss';
import Link from 'next/link';

const Navigation = () => {
    const locale = useLocale();
    const t = useTranslations('Navigation');

    const handleLanguageIconClick = (e, lang) => {
        e.preventDefault();
        e.stopPropagation();
        window.location.href = `/${lang}`
    }

    return <Navbar collapseOnSelect className={styles.navigation} expand="lg" bg="light" variant="light">
        <Navbar.Brand href="/">
            {locale === 'kr' ?
                <Image src={WordCoinLogoKoreanImg} height={0} width={0} style={{ height: 35, width: 'auto' }} alt=""/> :
                <Image src={WordCoinLogoImg} height={0} width={0} style={{ height: 35, width: 'auto' }} alt=""/> }
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/"><span className={styles.linkText}> {t('main')} </span></Nav.Link>
                <Nav.Link href={`/metaverse-introduction`}><span className={styles.linkText}> {t('metaverseIntroduction')} </span></Nav.Link>
                <Nav.Link href={`/business-background`}><span className={styles.linkText}> {t('business')} </span></Nav.Link>
                <Nav.Link href={`/corp-introduction`}><span className={styles.linkText}> {t('corpIntro')} </span></Nav.Link>
                <Nav.Link href={`/roadmap`}><span className={styles.linkText}> {t('roadmap')} </span></Nav.Link>
                <Nav.Link href={`/coin-distribution`}><span className={styles.linkText}> {t('coinDistribution')} </span></Nav.Link>
                <Nav.Link href={`/partners`}> <span className={styles.linkText}> {t('partners')} </span></Nav.Link>
                <Nav.Link href='#'>
                    <span className={styles.linkText}>
                        <Image src={UsaImg} height={20} onClick={(e) => handleLanguageIconClick(e, 'en')}  alt=""/> | <Image src={KoreaImg} height={25} onClick={(e) => handleLanguageIconClick(e, 'kr')}   alt=""/>
                    </span>
                </Nav.Link>
                {/*<NavDropdown title="Dropdown" id="collasible-nav-dropdown">*/}
                {/*    <NavDropdown.Item href="/">Home</NavDropdown.Item>*/}
                {/*    <NavDropdown.Item href="/about-us">About us</NavDropdown.Item>*/}
                {/*    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                {/*    <NavDropdown.Divider />*/}
                {/*    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
                {/*</NavDropdown>*/}
            </Nav>
            {/*<Nav>*/}
            {/*    <Nav.Link href="#deets">More deets</Nav.Link>*/}
            {/*    <Nav.Link eventKey={2} href="#memes">*/}
            {/*        Dank memes*/}
            {/*    </Nav.Link>*/}
            {/*</Nav>*/}
        </Navbar.Collapse>
    </Navbar>
}

export default Navigation;
