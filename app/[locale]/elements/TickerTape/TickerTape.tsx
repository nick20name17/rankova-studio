import { useTranslations } from "next-intl";
import "./TickerTape.css";

export const TickerTape = () => {
    const t = useTranslations("TickerTape");
    return (
        <div className="relative flex h-10 overflow-x-hidden bg-accent font-medium text-primary">
            <div className="animate-marquee whitespace-nowrap py-2">
                {Array(10)
                    .fill(0)
                    .map((_, index) => (
                        <span key={index} className="px-7 moving-text">
                            {t("title")}
                        </span>
                    ))}
            </div>

        </div>
    );
};
