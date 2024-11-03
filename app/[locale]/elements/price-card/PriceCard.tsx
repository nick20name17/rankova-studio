import { ICard } from "@/app/[locale]/sections/prices/PricesMock";
import { useTranslations } from "next-intl";
import { Montserrat, Nunito } from "next/font/google";
import Image from "next/image";
import { EnrollBtn } from "../enroll-btn/EnrollBtn";
import "./PriceCard.css";

type Props = {
    card: ICard;
};

const nunito = Nunito({
    subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext"],
    weight: ["800", "400"],
});
const montserrat = Montserrat({
    subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext"],
    weight: ["400"],
});

export const PriceCard = ({ card }: Props) => {
    const t = useTranslations("Prices");

    return (
        <div className="price-card">
            <div className="price-card-header">
                <Image
                    src={card.icon}
                    alt={card.title}
                    width={80}
                    height={80}
                />
                <h3>{card.title}</h3>
            </div>
            <div className={`price-card-info ${nunito.className}`}>
                {card.sections.map((section, i) => (
                    <div
                        key={i}
                        className={`price-section ${
                            section.gap ? "with-gap" : ""
                        } ${section.price ? "flex" : ""}`}>
                        {section.title && (
                            <h4 className="section-title">
                                {section.title}
                                {section.time && (
                                    <span
                                        className={`lesson-time ${montserrat.className}`}>
                                        {" "}
                                        ({section.time}&nbsp;{t("min")})
                                    </span>
                                )}
                            </h4>
                        )}
                        {section.caption && (
                            <p className={`caption ${nunito.className}`}>
                                {section.caption}
                            </p>
                        )}
                        {section.price && (
                            <div className="price title-price">
                                {section.price}&nbsp;&#8372;
                            </div>
                        )}
                        <ul>
                            {section.items &&
                                section.items.map((item, index) => (
                                    <li
                                        key={i + index}
                                        className={`price-item ${
                                            section.list ? "list" : ""
                                        }`}>
                                        <span className="item-title">
                                            {item.item}
                                        </span>
                                        {item.time && (
                                            <span
                                                className={`lesson-time ${montserrat.className}`}>
                                                &nbsp;({item.time}&nbsp;
                                                {t("min")})
                                            </span>
                                        )}
                                        <div className="price">
                                            {item.price}&nbsp;&#8372;
                                        </div>
                                    </li>
                                ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="btn-container">
                <EnrollBtn />
            </div>
        </div>
    );
};
