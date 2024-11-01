import { WhyUsCard } from "@/app/[locale]/elements/why-us-card/WhyUsCard";
import Icon1 from "@/app/img/icon-1.svg";
import Icon2 from "@/app/img/icon-2.svg";
import Icon3 from "@/app/img/icon-3.svg";
import Icon4 from "@/app/img/icon-4.svg";
import Icon5 from "@/app/img/icon-5.svg";
import Icon6 from "@/app/img/icon-6.svg";
import "./WhyUs.css";

export const WhyUs = () => {
    const cards = [
        {
            icon: Icon1.src,
            title: "Професійність",
            text: "Професійна апаратура для онлайн та офлайн занять.",
        },
        {
            icon: Icon2.src,
            title: "Душевна атмосфера",
            text: "Це місце, де панує душевна атмосфера і ти дійсно відчуваєш себе вільним.",
        },
        {
            icon: Icon3.src,
            title: "Комфортний простір",
            text: "Дворівневий сучасний і комфортний простір для музичного розвитку.",
        },
        {
            icon: Icon4.src,
            title: "Робимо з любові",
            text: "Навчання в дружній атмосфері, з любові до музики, а не з примусу.",
        },
        {
            icon: Icon5.src,
            title: "Концерти",
            text: "Soul Place — місце, де можуть виступати учні та музиканти, а глядачі насолоджуватися концертами.",
        },
        {
            icon: Icon6.src,
            title: "Без обмежень",
            text: "Заняття доступні для дорослих та дітей.",
        },
    ];
    return (
        <section className="why-us">
            <h2>Чому обирають нас ?</h2>
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
