import FacebookHover from "@/app/img/facebook-hover.svg";
import Facebook from "@/app/img/facebook.svg";
import InstHover from "@/app/img/inst-hover.svg";
import Inst from "@/app/img/inst.svg";
import Logo from "@/app/img/logo.svg";
import TelegramHover from "@/app/img/telegram-hover.svg";
import Telegram from "@/app/img/telegram.svg";
import TikTokHover from "@/app/img/tiktok-hover.svg";
import TikTok from "@/app/img/tiktok.svg";
import YouTubeHover from "@/app/img/youtube-hover.svg";
import YouTube from "@/app/img/youtube.svg";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import "./Footer.css";
import { LogoSvg } from "../../elements/logo-svg/LogoSvg";

export const Footer = () => {
    const t = useTranslations("Footer");

    return (
        <footer className="footer">
            <div className="footer-left">
                <Link className="footer-logo" href="./#">
                    <LogoSvg />
                </Link>

                <p className="footer-descr">{t("description")}</p>

                <Link className="footer-link footer-policy" href="/">
                    {t("policy")}
                </Link>
            </div>

            <div className="footer-right">
                <nav className="footer-nav">
                    <h3 className="footer-title">{t("about")}</h3>
                    <ul className="footer-list">
                        <li className="footer-item">
                            <Link href="#about-us" className="footer-item-link">
                                {t("about")}
                            </Link>
                        </li>
                        <li className="footer-item">
                            <Link href="#teachers" className="footer-item-link">
                                {t("teachers")}
                            </Link>
                        </li>
                        <li className="footer-item">
                            <Link href="#career" className="footer-item-link">
                                {t("career")}
                            </Link>
                        </li>
                        <li className="footer-item">
                            <Link href="#prices" className="footer-item-link">
                                {t("prices")}
                            </Link>
                        </li>
                        <li className="footer-item">
                            <Link
                                href="#gift-card"
                                className="footer-item-link">
                                {t("gift")}
                            </Link>
                        </li>
                        <li className="footer-item">
                            <Link href="#qa" className="footer-item-link">
                                {t("qa")}
                            </Link>
                        </li>
                        <li className="footer-item">
                            <Link href="#reviews" className="footer-item-link">
                                {t("reviews")}
                            </Link>
                        </li>
                        <li className="footer-item">
                            <Link
                                href="#contact-info"
                                className="footer-item-link">
                                {t("contact")}
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className="socials-nav">
                    <h3 className="footer-title">{t("contact")}</h3>
                    <div className="socials-list">
                        <Link href="tel:+380978232828" className="footer-phone">
                            +380 (97) 823 28 28
                        </Link>
                        <div className="socials">
                            <div className="icon-container">
                                <Link
                                    className=""
                                    target="_blank"
                                    href={
                                        "https://www.instagram.com/rankova.studio/"
                                    }>
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
                                    href={
                                        "https://www.facebook.com/rankova.studio"
                                    }>
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
                                    href={
                                        "https://www.youtube.com/@rankovastudio"
                                    }>
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
                        <Link
                            className="footer-link footer-policy-mobile"
                            href="/">
                            {t("policy")}
                        </Link>
                        <Link
                            target="_blank"
                            href="https://www.instagram.com/design_with_anastasiia?igsh=cGlqMHE1NGw1dHp3"
                            className="footer-design">
                            {t("design")}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
