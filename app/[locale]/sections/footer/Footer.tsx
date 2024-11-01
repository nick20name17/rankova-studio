import FacebookHover from "@/app/img/facebook-hover.svg";
import Facebook from "@/app/img/facebook.svg";
import InstHover from "@/app/img/inst-hover.svg";
import Inst from "@/app/img/inst.svg";
import Logo from "@/app/img/logo.png";
import TelegramHover from "@/app/img/telegram-hover.svg";
import Telegram from "@/app/img/telegram.svg";
import TikTokHover from "@/app/img/tiktok-hover.svg";
import TikTok from "@/app/img/tiktok.svg";
import YouTubeHover from "@/app/img/youtube-hover.svg";
import YouTube from "@/app/img/youtube.svg";
import Image from "next/image";
import Link from "next/link";
import "./Footer.css";
export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <Link href="./#">
                    <Image src={Logo} alt="Ranok" width={200} height={100} />
                </Link>

                <p className="footer-descr">
                    Музика - для всіх, а не тільки для обраних.
                </p>

                <Link className="footer-link footer-policy" href="/">
                    Політика конфіденційності
                </Link>
            </div>

            <div className="footer-right">
                <nav className="footer-nav">
                    <h3 className="footer-title">Навігація</h3>
                    <ul className="footer-list">
                        <li className="footer-item">
                            <Link href="#about-us" className="footer-item-link">
                                Про нас
                            </Link>
                        </li>
                        <li className="footer-item">
                            <Link href="#teachers" className="footer-item-link">
                                Викладачі
                            </Link>
                        </li>
                        <li className="footer-item">
                            <Link href="#career" className="footer-item-link">
                                Вакансії
                            </Link>
                        </li>
                        <li className="footer-item">
                            <Link href="#prices" className="footer-item-link">
                                Вартість
                            </Link>
                        </li>
                        <li className="footer-item">
                            <Link
                                href="#gift-card"
                                className="footer-item-link">
                                Сертифікати
                            </Link>
                        </li>
                        <li className="footer-item">
                            <Link href="#qa" className="footer-item-link">
                                Часті питання
                            </Link>
                        </li>
                        <li className="footer-item">
                            <Link href="#reviews" className="footer-item-link">
                                Відгуки
                            </Link>
                        </li>
                        <li className="footer-item">
                            <Link
                                href="#contact-info"
                                className="footer-item-link">
                                Контакти
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className="socials-nav">
                    <h3 className="footer-title">Контакти</h3>
                    <div className="socials-list">
                        <Link href="tel:+380978232828" className="footer-phone">
                            +380 (97) 823 28 28
                        </Link>
                        <div className="socials">
                            <div className="icon-container">
                                <Link className="" href={""}>
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
                                <Link className="" href={""}>
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
                                <Link className="" href={""}>
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
                                <Link className="" href={""}>
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
                                <Link className="" href={""}>
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
                        <Link
                            className="footer-link footer-policy-mobile"
                            href="/">
                            Політика конфіденційності
                        </Link>
                        <Link
                            target="_blank"
                            href="https://www.instagram.com/design_with_anastasiia?igsh=cGlqMHE1NGw1dHp3"
                            className="footer-item footer-item_link">
                            Дизайн сайту: Anastasia
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
