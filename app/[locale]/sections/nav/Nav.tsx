"use client";

import { LangSelect } from "@/app/[locale]/elements/lang-select/LangSelect";
import FacebookHover from "@/app/img/facebook-hover.svg";
import Facebook from "@/app/img/facebook.svg";
import InstHover from "@/app/img/inst-hover.svg";
import Inst from "@/app/img/inst.svg";
import TelegramHover from "@/app/img/telegram-hover.svg";
import Telegram from "@/app/img/telegram.svg";
import TikTokHover from "@/app/img/tiktok-hover.svg";
import TikTok from "@/app/img/tiktok.svg";
import YouTubeHover from "@/app/img/youtube-hover.svg";
import YouTube from "@/app/img/youtube.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "./Nav.css";

import Logo from "@/app/img/logo.svg";

interface INavItem {
    btn: string;
    teachers: string;
    career: string;
    prices: string;
    gift: string;
    qa: string;
    reviews: string;
    contact: string;
    about: string;
    description: string;
}

export const Nav = (props: INavItem) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="nav">
            <Link className="nav-logo" href="./#">
                <Image priority src={Logo} alt="Ranok" />
            </Link>
            <div className={`nav-menu ${isOpen ? "open" : ""}`}>
                <p className="nav-descr">{props.description}</p>
                <Link
                    onClick={toggleMenu}
                    href="#about-us"
                    scroll={true}
                    className="nav-link">
                    {props.about}
                </Link>
                <Link
                    onClick={toggleMenu}
                    href="#teachers"
                    className="nav-link">
                    {props.teachers}
                </Link>
                <Link
                    onClick={toggleMenu}
                    href="#career"
                    className="nav-link nav-link-mobile">
                    {props.career}
                </Link>
                <Link onClick={toggleMenu} href="#prices" className="nav-link">
                    {props.prices}
                </Link>
                <Link
                    onClick={toggleMenu}
                    href="#gift-card"
                    className="nav-link">
                    {props.gift}
                </Link>
                <Link
                    onClick={toggleMenu}
                    href="#qa"
                    className="nav-link nav-link-mobile">
                    {props.qa}
                </Link>{" "}
                <Link
                    onClick={toggleMenu}
                    href="#reviews"
                    className="nav-link nav-link-mobile">
                    {props.reviews}
                </Link>
                <Link
                    onClick={toggleMenu}
                    href="#contact-info"
                    className="nav-link ">
                    {props.contact}
                </Link>
                <LangSelect />
                <Link
                    onClick={toggleMenu}
                    href="tel:+380978232828"
                    className="phone-link">
                    +380 (97) 823 28 28
                </Link>
                <div className="socials">
                    <div className="icon-container">
                        <Link
                            className=""
                            target="_blank"
                            href={"https://www.instagram.com/rankova.studio/"}>
                            <div className="icon-box">
                                <Image
                                    className="social-icon"
                                    src={Inst.src}
                                    height={44}
                                    width={44}
                                    alt="Instagram"
                                />
                            </div>
                            <div className="social-icon-hover icon-box">
                                <Image
                                    src={InstHover.src}
                                    height={44}
                                    width={44}
                                    alt="Instagram"
                                />
                            </div>
                        </Link>
                    </div>
                    <div className="icon-container">
                        <Link
                            className=""
                            target="_blank"
                            href={"https://www.facebook.com/rankova.studio"}>
                            <div className="social-icon icon-box">
                                <Image
                                    className="social-icon"
                                    src={Facebook.src}
                                    height={44}
                                    width={44}
                                    alt="Facebook"
                                />
                            </div>
                            <div className="social-icon-hover icon-box">
                                <Image
                                    src={FacebookHover.src}
                                    height={44}
                                    width={44}
                                    alt="Facebook"
                                />
                            </div>
                        </Link>
                    </div>
                    <div className="icon-container">
                        <Link
                            className=""
                            target="_blank"
                            href={"https://www.youtube.com/@rankovastudio"}>
                            <div className="social-icon icon-box">
                                <Image
                                    className="social-icon"
                                    src={YouTube.src}
                                    height={44}
                                    width={44}
                                    alt="YouTube"
                                />
                            </div>
                            <div className="social-icon-hover icon-box">
                                <Image
                                    src={YouTubeHover.src}
                                    height={44}
                                    width={44}
                                    alt="YouTube"
                                />
                            </div>
                        </Link>
                    </div>
                    <div className="icon-container">
                        <Link
                            className=""
                            target="_blank"
                            href={
                                "https://www.tiktok.com/@rankova.studio?_t=8pBtWy7l2Gc&_r=1"
                            }>
                            <div className="social-icon icon-box">
                                <Image
                                    className="social-icon"
                                    src={TikTok.src}
                                    height={44}
                                    width={44}
                                    alt="TikTok"
                                />
                            </div>
                            <div className="social-icon-hover icon-box">
                                <Image
                                    src={TikTokHover.src}
                                    height={44}
                                    width={44}
                                    alt="TikTok"
                                />
                            </div>
                        </Link>
                    </div>
                    <div className="icon-container">
                        <Link
                            className=""
                            target="_blank"
                            href={"https://t.me/rankovastudio"}>
                            <div className="social-icon icon-box">
                                <Image
                                    className="social-icon"
                                    src={Telegram.src}
                                    height={44}
                                    width={44}
                                    alt="Telegram"
                                />
                            </div>
                            <div className="social-icon-hover icon-box">
                                <Image
                                    src={TelegramHover.src}
                                    height={44}
                                    width={44}
                                    alt="Telegram"
                                />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <button className="nav-btn">{props.btn}</button>
            <button onClick={toggleMenu} className="burger">
                {isOpen ? (
                    <svg
                        width="45"
                        height="44"
                        viewBox="0 0 45 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M33.4999 11.0001L11.5 33M11.4999 11L33.4998 32.9999"
                            stroke="#3E3E3E"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 34 34"
                        fill="none">
                        <path
                            d="M27 25.3478V1C27 1 33 3.31884 33 10.2754M19 3.31884H1M19 12.5942H1M9 21.8696H1M27 27.4348C27 30.5096 24.314 33 21 33C17.686 33 15 30.5072 15 27.4348C15 24.3623 17.686 21.8696 21 21.8696C24.314 21.8696 27 24.3623 27 27.4348Z"
                            stroke="#3E3E3E"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                )}
            </button>
        </nav>
    );
};
