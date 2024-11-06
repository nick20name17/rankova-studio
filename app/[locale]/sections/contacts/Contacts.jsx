import { EnrollBtn } from "@/app/[locale]/elements/enroll-btn/EnrollBtn";
import Address from "@/app/img/address.svg";
import Clock from "@/app/img/clock.svg";
import FacebookHover from "@/app/img/facebook-hover.svg";
import Facebook from "@/app/img/facebook.svg";
import InstHover from "@/app/img/inst-hover.svg";
import Inst from "@/app/img/inst.svg";
import Phone from "@/app/img/phone.svg";
import TelegramHover from "@/app/img/telegram-hover.svg";
import Telegram from "@/app/img/telegram.svg";
import TikTokHover from "@/app/img/tiktok-hover.svg";
import TikTok from "@/app/img/tiktok.svg";
import YouTubeHover from "@/app/img/youtube-hover.svg";
import YouTube from "@/app/img/youtube.svg";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import "./Contacts.css";

export const Contacts = () => {
    const t = useTranslations("Contacts");
    return (
        <section id="contact-info" className="contact-info">
            <h2>{t("title")}</h2>
            <div className="contact-content">
                <iframe
                    className="google-map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2101.9874029237603!2d26.224303905385316!3d50.61905798643908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472f6cb0ad730493%3A0x807759f89dcf2d10!2sPetra%20Mohyly%20St%2C%2028%2C%20Rivne%2C%20Rivnens&#39;ka%20oblast%2C%2033000!5e0!3m2!1sen!2sua!4v1727793174036!5m2!1sen!2sua"
                    width="600"
                    height="450"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div className="contact-info-items">
                    <div className="address-header">
                        <Image
                            src={Address.src}
                            width={77}
                            height={77}
                            alt="map"
                        />
                        <h3>{t("street")}</h3>
                    </div>
                    <div className="details-block">
                        <div className="flex">
                            <Image
                                src={Phone.src}
                                alt="Phone"
                                width={44}
                                height={44}
                            />
                            <Link href="tel:+380978232828" type="tel">
                                +380 (97) 823 28 28
                            </Link>
                        </div>
                        <div className="flex">
                            <Image
                                src={Clock.src}
                                width={44}
                                height={44}
                                alt="clock"
                            />
                            <span>
                                {t("hours1")} <br /> {t("hours2")} <br />{" "}
                                {t("hours3")}
                            </span>
                        </div>
                    </div>
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
                    <EnrollBtn black />
                </div>
            </div>
        </section>
    );
};
