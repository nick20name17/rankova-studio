import { WhyUsCard } from "@/app/[locale]/elements/why-us-card/WhyUsCard";
import Icon1 from "@/app/img/icon-1.svg";
import Icon2 from "@/app/img/icon-2.svg";
import Icon3 from "@/app/img/icon-3.svg";
import Icon4 from "@/app/img/icon-4.svg";
import Icon5 from "@/app/img/icon-5.svg";
import Icon6 from "@/app/img/icon-6.svg";
import { useTranslations } from "next-intl";
import "./WhyUs.css";

export const WhyUs = () => {
    const t = useTranslations("WhyUs");
    const cards = [
        {
            icon: Icon1.src,
            title: t("listTitle1"),
            text: t("ListDesc1"),
        },
        {
            icon: Icon2.src,
            title: t("listTitle2"),
            text: t("ListDesc2"),
        },
        {
            icon: Icon3.src,
            title: t("listTitle3"),
            text: t("ListDesc3"),
        },
        {
            icon: Icon4.src,
            title: t("listTitle4"),
            text: t("ListDesc4"),
        },
        {
            icon: Icon5.src,
            title: t("listTitle5"),
            text: t("ListDesc5"),
        },
        {
            icon: Icon6.src,
            title: t("listTitle6"),
            text: t("ListDesc6"),
        },
    ];
    return (
        <section className="why-us">
            <h2>{t("title")}</h2>
            <div className="why-us-grid">
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
