import Image from "next/image";
import Link from "next/link";
import "./Gift.css";

import giftCards from "@/app/img/gift-cards.png";
import { useTranslations } from "next-intl";

export const Gift = () => {
    const t = useTranslations("GiftCard");
    return (
        <section className="gift-section" id="gift-card">
            <div className="gift">
                <Image className="gift-card" src={giftCards} alt="gift card" width={477} height={324} />

                <div className="gift-card-content">
                    <h2 className="gift-card-title">{t("title")}</h2>
                    <p className="gift-card-desc">{t("text")}</p>
                    <Link className="enroll-link" target="_blank" href="https://o2102.alteg.io/loyalty">
                        <button className="enroll-btn buy-btn">
                            {t("btn")}
                        </button>
                    </Link>
                </div>
            </div>
            <Link target="_blank" href="https://o2102.alteg.io/loyalty">
                <button className="enroll-btn buy-btn_mobile">
                    {t("btn")}
                </button>
            </Link>
        </section>
    );
};
