import React, {useEffect, useState} from "react";
import './css/reset.css'
import './css/style.css'

import logo from './img/odigo-Logo.svg'
import picTemple from './img/Icon.svg'
import picMan from './img/Icon_man.svg'
import picHouse from './img/Icon_house.svg'

import place1 from './img/place1.jpg'
import place2 from './img/place2.jpg'
import place3 from './img/place3.jpg'
import place4 from './img/place4.jpg'
import place5 from './img/place5.jpg'

import tour1 from './img/tours1.jpg'
import tour2 from './img/tours2.jpg'

import top1 from './img/top1.jpg'
import top2 from './img/top2.jpg'
import top3 from './img/top3.jpg'
import top4 from './img/top4.jpg'
import top5 from './img/top5.jpg'
import top6 from './img/top6.jpg'

import odigoLogo from './img/odigo-Logo-Big.svg'

function App() {

    const [header, setHeader] = useState('header')

    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    }, []);

    const isSticky = () => {
        const scrollTop = window.pageYOffset;
        const stickyClass = scrollTop > 50 ? "header header__active" : "header";

        setHeader(stickyClass)
    };

    return (<div>
        {/*Header start*/}
        <header className={header}>
            <div className="wrapper">
                <div className="header__wrapper">
                    <div className="header__logo">
                        <a href="/" className="header__logo-link">
                            <img src={logo} alt="Discover Amazing places in Japan" className="header__logo-pic"/>
                        </a>
                    </div>

                    <nav className="header__nav">
                        <ul className="header__list">
                            <li className="header__item">
                                <a href="#!" className="header__link">Articles</a>
                            </li>
                            <li className="header__item">
                                <a href="#!" className="header__link">Locations</a>
                            </li>
                            <li className="header__item">
                                <a href="#!" className="header__link">Videos</a>
                            </li>
                            <li className="header__item">
                                <a href="#!" className="header__link">Sign in</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        {/*Header end*/}


        <main className="main">
            {/*Intro start*/}
            <section className="intro">
                <div className="wrapper">
                    <h1 className="intro__title">
                        Discover Amazing places in Japan
                    </h1>
                    <p className="intro__subtitle">
                        Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.
                        Being gorgeous with belly side up i could pee on this if i had the energy but under the bed,
                        for attack the child, open the door,
                    </p>
                    <form className="search-form">
                        <fieldset className='search-form__wrapper'>
                            <p className="search-from__info">
                                <input type="text" name='user-like-to-do' className="search-form__field"
                                       placeholder='What would you like to do?'/>
                                <input type="text" name='user-like-to-go' className="search-form__field"
                                       placeholder='Where would you like to go?'/>
                                <button type='submit' className="search-form__submit">SEARCH</button>
                            </p>
                        </fieldset>
                    </form>
                </div>
            </section>
            {/*Intro end*/}


            {/*Benefits start*/}
            <section className="benefits">
                <div className="benefits__wrap">
                    <h2 className="benefits__title">
                        Benefits of Odigo
                    </h2>
                    <div className="benefits__cards">
                        <div className="benefits__card">
                            <div className="benefits__card-pic">
                                <img src={picTemple} alt="Welcome to Odigo!" className="benefits__card-thumb"/>
                            </div>
                            <h3 className="benefits__card-title">
                                Welcome to Odigo!
                            </h3>
                            <p className="benefits__card-desc">
                                Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.
                            </p>
                            <a href="#!" className="benefits__card-more">LEARN MORE</a>
                        </div>
                        <div className="benefits__card">
                            <div className="benefits__card-pic">
                                <img src={picMan} alt="Your Personal Japan Guide" className="benefits__card-thumb"/>
                            </div>
                            <h3 className="benefits__card-title">
                                Your Personal Japan Guide
                            </h3>
                            <p className="benefits__card-desc">
                                Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.
                            </p>
                            <a href="#!" className="benefits__card-more">LEARN MORE</a>
                        </div>
                        <div className="benefits__card">
                            <div className="benefits__card-pic">
                                <img src={picHouse} alt="Promoting Local Businesses" className="benefits__card-thumb"/>
                            </div>
                            <h3 className="benefits__card-title">
                                Promoting Local Businesses
                            </h3>
                            <p className="benefits__card-desc">
                                Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.
                            </p>
                            <a href="#!" className="benefits__card-more">LEARN MORE</a>
                        </div>
                    </div>
                </div>
            </section>
            {/*Benefits end*/}


            {/*Plaсes start*/}
            <section className="places">
                <div className="wrapper-full">
                    <div className="places__caption">
                        <h2 className="places__title section__title">
                            Get inspired for your next trip
                        </h2>
                        <a href="#!" className="places__view-all">VIEW ALL</a>
                    </div>
                    <div className="places__cards">

                        <figure className="places__card places__card_size_lg">
                            <img src={place1} alt="Mount fuji" className='places__card-pic places__card-pic_size_lg'/>
                            <figcaption className='places__card-title'>
                                Mount Fuji
                            </figcaption>
                            <a href="#!" className="places__card_link"></a>
                        </figure>

                        <figure className="places__card places__card_size_lg">
                            <img src={place2} alt="Kyoto" className='places__card-pic places__card-pic_size_lg'/>
                            <figcaption className='places__card-title'>
                                Kyoto
                            </figcaption>
                            <a href="#!" className="places__card_link"></a>
                        </figure>

                        <figure className="places__card places__card_size_sm">
                            <img src={place3} alt="Tokyo" className='places__card-pic places__card-pic_size_sm'/>
                            <figcaption className='places__card-title'>
                                Tokyo
                            </figcaption>
                            <a href="#!" className="places__card_link"></a>
                        </figure>

                        <figure className="places__card places__card_size_sm">
                            <img src={place4} alt="Niigata" className='places__card-pic places__card-pic_size_sm'/>
                            <figcaption className='places__card-title'>
                                Niigata
                            </figcaption>
                            <a href="#!" className="places__card_link"></a>
                        </figure>

                        <figure className="places__card places__card_size_sm">
                            <img src={place5} alt="Sapporo" className='places__card-pic places__card-pic_size_sm'/>
                            <figcaption className='places__card-title'>
                                Sapporo
                            </figcaption>
                            <a href="#!" className="places__card_link"></a>
                        </figure>
                    </div>
                </div>
            </section>
            {/*Plaсes end*/}


            {/*Tours start*/}
            <div className="tours">
                <div className="wrapper-full">


                    <div className="tours__tour tour">
                        <div className="tour__pic">
                            <img src={tour1} alt="Prefecture in Focus: Tottori" className="tour__thumb"/>
                        </div>
                        <div className="tour__info">
                            <h3 className="tour__title">
                                Prefecture in Focus: Tottori
                            </h3>
                            <p className="tour__desc">
                                Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.
                                Being gorgeous with belly side up i could pee on this if i had the energy but under the
                                bed, for attack the child, open the door,
                            </p>
                            <a href="#!" className="tour__more">
                                VIEW PREFECTURE
                            </a>
                        </div>
                    </div>


                    <div className="tours__tour tour">
                        <div className="tour__info">
                            <h3 className="tour__title">
                                Featured Neighborhood: Kyoto’s Arashiyama
                            </h3>
                            <p className="tour__desc">
                                Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.
                                Being gorgeous with belly side up i could pee on this if i had the energy but under the
                                bed, for attack the child, open the door,
                            </p>
                            <a href="#!" className="tour__more">
                                VIEW NEIGHBORHOOD
                            </a>
                        </div>
                        <div className="tour__pic">
                            <img src={tour2} alt="Prefecture in Focus: Tottori" className="tour__thumb"/>
                        </div>
                    </div>


                </div>
            </div>
            {/*Tours end*/}


            {/*Top start*/}
            <section className="top">
                <div className="wrapper-full">
                    <h2 className="top__title section__title">
                        Today top places to visit
                    </h2>

                    <div className="top__cards">

                        <div className="top__card">
                            <div className="top__card-pic">
                                <img src={top1} alt="NAGOYA" className="top__card-thumd"/>
                                <div className="top__card-stats">
                                    <h3 className="top__card-title">
                                        NAGOYA
                                    </h3>
                                    <div className="top__card-likes">
                                        <span className="top__card-likes-value">221</span>
                                    </div>
                                    <div className="top__card-comments">
                                        <span className="top__card-comments-value">50</span>
                                    </div>
                                </div>
                            </div>
                            <p className="top__card-desc">
                                Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.
                                Being gorgeous with belly side up i could pee on this.
                            </p>
                            <a href='#!' className="top__card-more">
                                SEE MORE
                            </a>
                        </div>

                        <div className="top__card">
                            <div className="top__card-pic">
                                <img src={top2} alt="NIIGATA" className="top__card-thumd"/>
                                <div className="top__card-stats">
                                    <h3 className="top__card-title">
                                        NIIGATA
                                    </h3>
                                    <div className="top__card-likes">
                                        <span className="top__card-likes-value">221</span>
                                    </div>
                                    <div className="top__card-comments">
                                        <span className="top__card-comments-value">50</span>
                                    </div>
                                </div>
                            </div>
                            <p className="top__card-desc">
                                Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.
                                Being gorgeous with belly side up i could pee on this.
                            </p>
                            <a href='#!' className="top__card-more">
                                SEE MORE
                            </a>
                        </div>

                        <div className="top__card">
                            <div className="top__card-pic">
                                <img src={top3} alt="OSAKA" className="top__card-thumd"/>
                                <div className="top__card-stats">
                                    <h3 className="top__card-title">
                                        OSAKA
                                    </h3>
                                    <div className="top__card-likes">
                                        <span className="top__card-likes-value">221</span>
                                    </div>
                                    <div className="top__card-comments">
                                        <span className="top__card-comments-value">50</span>
                                    </div>
                                </div>
                            </div>
                            <p className="top__card-desc">
                                Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.
                                Being gorgeous with belly side up i could pee on this.
                            </p>
                            <a href='#!' className="top__card-more">
                                SEE MORE
                            </a>
                        </div>

                        <div className="top__card">
                            <div className="top__card-pic">
                                <img src={top4} alt="SAITAMA" className="top__card-thumd"/>
                                <div className="top__card-stats">
                                    <h3 className="top__card-title">
                                        SAITAMA
                                    </h3>
                                    <div className="top__card-likes">
                                        <span className="top__card-likes-value">221</span>
                                    </div>
                                    <div className="top__card-comments">
                                        <span className="top__card-comments-value">50</span>
                                    </div>
                                </div>
                            </div>
                            <p className="top__card-desc">
                                Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.
                                Being gorgeous with belly side up i could pee on this.
                            </p>
                            <a href='#!' className="top__card-more">
                                SEE MORE
                            </a>
                        </div>

                        <div className="top__card">
                            <div className="top__card-pic">
                                <img src={top5} alt="UENO" className="top__card-thumd"/>
                                <div className="top__card-stats">
                                    <h3 className="top__card-title">
                                        UENO
                                    </h3>
                                    <div className="top__card-likes">
                                        <span className="top__card-likes-value">221</span>
                                    </div>
                                    <div className="top__card-comments">
                                        <span className="top__card-comments-value">50</span>
                                    </div>
                                </div>
                            </div>
                            <p className="top__card-desc">
                                Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.
                                Being gorgeous with belly side up i could pee on this.
                            </p>
                            <a href='#!' className="top__card-more">
                                SEE MORE
                            </a>
                        </div>

                        <div className="top__card">
                            <div className="top__card-pic">
                                <img src={top6} alt="SHIBUYA" className="top__card-thumd"/>
                                <div className="top__card-stats">
                                    <h3 className="top__card-title">
                                        SHIBUYA
                                    </h3>
                                    <div className="top__card-likes">
                                        <span className="top__card-likes-value">221</span>
                                    </div>
                                    <div className="top__card-comments">
                                        <span className="top__card-comments-value">50</span>
                                    </div>
                                </div>
                            </div>
                            <p className="top__card-desc">
                                Jump off balcony, onto stranger's head. Chase ball of string hide when guests come over.
                                Being gorgeous with belly side up i could pee on this.
                            </p>
                            <a href='#!' className="top__card-more">
                                SEE MORE
                            </a>
                        </div>

                    </div>
                </div>
            </section>
            {/*Top end*/}

            {/*Videos start*/}

            <div className="videos">
                <div className="videos__wrapper">
                    <div className="video__item"></div>
                    <iframe className='video__element' src="https://www.youtube.com/embed/G5RpJwCJDqc"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                    </iframe>
                </div>
            </div>
            {/*Videos end*/}
        </main>

        <footer className="footer">
            <div className="wrapper">
                <div className="footer__item">
                    <div className="footer__logo">
                        <img src={odigoLogo} alt="Logo" className="footer__logo-pic"/>
                    </div>
                    <nav className="footer__nav">
                        <ul className="footer__menu">
                            <li className="footer__menu-item">
                                <h3 className="footer__menu-title">Company</h3>
                            </li>
                            <li className="footer__menu-item">
                                <a href="#!" className="footer__menu-link">About</a>
                            </li>
                            <li className="footer__menu-item">
                                <a href="#!" className="footer__menu-link">Team</a>
                            </li>
                            <li className="footer__menu-item">
                                <a href="#!" className="footer__menu-link">Careers</a>
                            </li>
                            <li className="footer__menu-item">
                                <a href="#!" className="footer__menu-link">Privacy Policy</a>
                            </li>
                        </ul>
                        <ul className="footer__menu">
                            <li className="footer__menu-item">
                                <h3 className="footer__menu-title">Location</h3>
                            </li>
                            <li className="footer__menu-item">
                                <a href="#!" className="footer__menu-link">Tokyo</a>
                            </li>
                            <li className="footer__menu-item">
                                <a href="#!" className="footer__menu-link">Kyoto</a>
                            </li>
                            <li className="footer__menu-item">
                                <a href="#!" className="footer__menu-link">Osaka</a>
                            </li>
                            <li className="footer__menu-item">
                                <a href="#!" className="footer__menu-link">Hokkaido</a>
                            </li>
                        </ul>
                        <ul className="footer__menu">
                            <li className="footer__menu-item">
                                <h3 className="footer__menu-title">Social Media</h3>
                            </li>
                            <li className="footer__menu-item">
                                <a href="#!" className="footer__menu-link">Facebook</a>
                            </li>
                            <li className="footer__menu-item">
                                <a href="#!" className="footer__menu-link">Twitter</a>
                            </li>
                            <li className="footer__menu-item">
                                <a href="#!" className="footer__menu-link">Instagram</a>
                            </li>
                            <li className="footer__menu-item">
                                <a href="#!" className="footer__menu-link">Youtube</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    </div>);
}

export default App;
