import { WhyUsCard } from "@/app/[locale]/elements/why-us-card/WhyUsCard";
import Icon10 from "@/app/img/icon-10.svg";
import Icon11 from "@/app/img/icon-11.svg";
import Icon12 from "@/app/img/icon-12.svg";
import Icon7 from "@/app/img/icon-7.svg";
import Icon8 from "@/app/img/icon-8.svg";
import Icon9 from "@/app/img/icon-9.svg";
import { useTranslations } from "next-intl";
import "./Advantages.css";

export const Advantages = () => {
    const t = useTranslations("Advantages");
    const cards = [
        {
            icon: Icon7.src,
            title: t("listTitle1"),
            text: t("ListDesc1"),
        },
        {
            icon: Icon8.src,
            title: t("listTitle2"),
            text: t("ListDesc2"),
        },
        {
            icon: Icon9.src,
            title: t("listTitle3"),
            text: t("ListDesc3"),
        },
        {
            icon: Icon10.src,
            title: t("listTitle4"),
            text: t("ListDesc4"),
        },
        {
            icon: Icon11.src,
            title: t("listTitle5"),
            text: t("ListDesc5"),
        },
        {
            icon: Icon12.src,
            title: t("listTitle6"),
            text: t("ListDesc6"),
        },
    ];
    return (
        <section className="advantages">
            <h2>{t("title")}</h2>
            <div className="advantages-grid">
                {cards.map((card) => (
                    <WhyUsCard
                        key={card.title}
                        icon={card.icon}
                        title={card.title}
                        text={card.text}
                    />
                ))}
            </div>
        </section>
    );
};
