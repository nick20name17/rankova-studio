import { WhyUsCard } from "@/app/[locale]/elements/why-us-card/WhyUsCard";
import Icon10 from "@/app/img/icon-10.svg";
import Icon11 from "@/app/img/icon-11.svg";
import Icon12 from "@/app/img/icon-12.svg";
import Icon7 from "@/app/img/icon-7.svg";
import Icon8 from "@/app/img/icon-8.svg";
import Icon9 from "@/app/img/icon-9.svg";
import "./Advantages.css";

export const Advantages = () => {
    const cards = [
        {
            icon: Icon7.src,
            title: "Власна кав’ярня",
            text: "У нас смачна кава та комфортна зона очікування.",
        },
        {
            icon: Icon8.src,
            title: "Енергонезалежні",
            text: "У нас можна займатися та працювати навіть попри відключення.",
        },
        {
            icon: Icon9.src,
            title: "Оренда кімнати",
            text: "Для твоїх самостійних занять",
        },
        {
            icon: Icon10.src,
            title: "Центр міста",
            text: "Доступна локація: ми розташовані недалеко від центру міста.",
        },
        {
            icon: Icon11.src,
            title: "Комфорт",
            text: "Комфортний температурний режим: влітку не спекотно, а взимку не холодно.",
        },
        {
            icon: Icon12.src,
            title: "Гнучкість",
            text: "Гнучкі: підберемо для вас зручний час.",
        },
    ];
    return (
        <section className="advantages">
            <h2>Наші переваги </h2>
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
