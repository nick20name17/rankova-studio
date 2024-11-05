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
                <Image src={icon} width={52} height={52} alt="icon" />
                <svg
                    className="card-spot"
                    xmlns="http://www.w3.org/2000/svg"
                    width="71"
                    height="59"
                    viewBox="0 0 71 59"
                    fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.35983 7.86158C10.8619 0.433195 25.0529 8.91339 35.9031 7.85599C46.2796 6.84474 55.4357 -4.13283 64.5463 1.9961C73.6674 8.13206 68.2228 20.1126 68.5534 29.8206C68.8859 39.5875 75.0177 52.4306 66.4274 57.2468C57.8762 62.041 47.0552 51.1554 36.6296 47.7188C26.9798 44.5379 15.4304 46.09 9.18677 38.3783C1.79872 29.2531 -2.46845 15.6626 4.35983 7.86158Z"
                        fill="#FFDF18"
                    />
                </svg>
            </div>
            <h3 className={`card-title ${nunito.className}`}>{title}</h3>
            <p className="card-text">{text}</p>
        </div>
    );
};
