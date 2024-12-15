import { Nunito } from "next/font/google";
import Image from "next/image";
import "./WhyUsCard.css";

type Props = {
    icon: string;
    title: string;
    text: string;
};

const nunito = Nunito({
    subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext"],
    weight: ["800"],
});

export const WhyUsCard = ({ icon, title, text }: Props) => {
    return (
        <div className="why-us-card">
            <div className="card-icon-container">
                <Image src={icon} width={71} height={59} alt="icon" />
            </div>
            <h3 className={`card-title ${nunito.className}`}>{title}</h3>
            <p className="card-text">{text}</p>
        </div>
    );
};
